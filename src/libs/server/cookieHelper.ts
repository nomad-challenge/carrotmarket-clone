import { cookies } from "next/dist/client/components/headers";
import * as jwt from "jsonwebtoken";
import { NextResponseJoin } from "@/app/api/users/enter/route";
import client from "./client";

const COOKIE_NAME = "carrotmarket";
export async function getToken() {
  const cookieStore = cookies();
  const carrotmarketCookie = cookieStore.get(COOKIE_NAME);

  if (!carrotmarketCookie) {
    return NextResponseJoin(
      { ok: false, message: "Not found Token" },
      { status: 404 },
    );
  }
  let decoded;
  try {
    decoded = jwt.verify(carrotmarketCookie.value, process.env.SECRET_KEY!);
  } catch (err) {
    return NextResponseJoin(
      { ok: false, message: "Failed verify" },
      { status: 401 },
    );
  }

  const userId = (decoded as any).id;
  const user = await client.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user;
}

export async function setToken(token: string) {
  const exists = await client.token.findUnique({
    where: {
      payload: token,
    },
  });
  if (!exists) {
    return NextResponseJoin(
      { ok: false, message: "Not found token" },
      { status: 404 },
    );
  }

  const jwtToken = jwt.sign({ id: exists.userId }, process.env.SECRET_KEY!);
  cookies().set({ name: COOKIE_NAME, value: jwtToken });
}
