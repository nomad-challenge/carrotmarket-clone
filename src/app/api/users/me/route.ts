import { NextResponseJoin } from "../enter/route";
import { getToken } from "@/libs/server/cookieHelper";

export async function GET(req: Request) {
  const user = await getToken();

  return NextResponseJoin({ ok: true, profile: user }, { status: 200 });
}
