import { NextRequest, NextResponse } from "next/server";

export default async function POST(req: Request) {
  // console.log(req.body?.getReader());
  const body = await req.json();
  console.log(body);
  // return new Response(JSON.stringify({ ok: true }), { status: 200 });
  return NextResponse.json({ ok: true });
}
