import client from "@/libs/server/client";
import { NextResponse } from "next/server";
import twilio from "twilio";
import FormData from "form-data";
import got from "got";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
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

  if (phone) {
    const messge = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MY_PHONE_NUMBER!,
      body: `Your login token is ${payload}`,
    });
    console.log(messge);
  }
  if (email) {
    const form = new FormData();
    form.append(
      "from",
      `mcGrid from Nuber Eats <mailgun@${process.env.MAILGUN_DOMAIN_NAME}>`,
    );
    form.append("to", process.env.MY_EMAIL);
    form.append("subject", "Verification your Carrot Market");
    form.append("text", `Your Carrot Market Verification: ${payload}`);
    // form.append("html", "<h1>test</h1>");
    try {
      const user = await got(
        `https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN_NAME}/messages`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${Buffer.from(
              `api:${process.env.MAILGUN_API_KEY}`,
            ).toString("base64")}`,
          },
          body: form,
        },
      );
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  }
  // return new Response(JSON.stringify({ ok: true }), { status: 200 });
  return NextResponse.json<JsonBodyType>({ ok: true }, { status: 200 });
}
