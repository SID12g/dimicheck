import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const formData = await request.formData();
  const number = formData.get("number");
  const password: string | any = formData.get("password")?.toString();
  const telephone = formData.get("telephone");
  const hash = await bcrypt.hash(password, 10);
  const user = {
    number,
    password: hash,
    telephone,
    location: "class",
    reason: "",
  };

  let db = (await connectDB).db("dimicheck_database24");
  let dbuser = await db.collection("users").findOne({ number: number });

  if (dbuser) {
    return NextResponse.json({
      status: 409,
      error: "해당 번호는 이미 존해합니다.",
    });
  }

  try {
    let db = (await connectDB).db("dimicheck_database24");
    await db.collection("users").insertOne(user);
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  } catch (error) {
    return NextResponse.json({ status: 500, error });
  }
}
