// import { sealData } from "iron-session/edge";
import { NextResponseJoin } from "../enter/route";
import { setToken } from "@/libs/server/cookieHelper";

export async function POST(req: Request) {
  const { token } = await req.json();
  if (!token) {
    return NextResponseJoin({ ok: false }, { status: 400 });
  }
  await setToken(token);

  return NextResponseJoin(
    { ok: true },
    {
      status: 200,
    },
  );
}
