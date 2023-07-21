import client from "@/libs/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const user = await client.user.create({
    data: {
      email: "min3@nav.co",
      name: "min",
    },
  });
  return NextResponse.json({ ok: true, user });
}
