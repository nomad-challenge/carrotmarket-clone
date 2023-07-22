import client from "@/libs/server/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, phone } = await req.json();
  const payload = email ? { email } : { phone: +phone };
  let user;
  user = await client.user.upsert({
    where: {
      ...payload,
    },
    create: {
      name: "Ananymous",
      ...payload,
    },
    update: {},
  });
  console.log(user);
  // return new Response(JSON.stringify({ ok: true }), { status: 200 });
  return NextResponse.json({ ok: true });
}
