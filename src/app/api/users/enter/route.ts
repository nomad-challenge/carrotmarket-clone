import client from "@/libs/server/client";
import { NextResponse } from "next/server";

interface JsonBodyType {
  ok: boolean;
  [key: string]: any;
}
export async function POST(req: Request) {
  const { email, phone } = await req.json();
  const user = email ? { email } : phone ? { phone: +phone } : null;

  if (!user) {
    return NextResponse.json<JsonBodyType>({ ok: false }, { status: 400 });
  }
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Ananymous",
            ...user,
          },
        },
      },
    },
  });
  console.log(token);
  // return new Response(JSON.stringify({ ok: true }), { status: 200 });
  return NextResponse.json<JsonBodyType>({ ok: true }, { status: 200 });
}
