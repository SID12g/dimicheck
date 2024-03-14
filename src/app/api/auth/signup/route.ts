import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const formData = await request.formData();
  const number = formData.get("number");
  const password: string | any = formData.get("password")?.toString();
  const hash = await bcrypt.hash(password, 10);
  const user = { number, password: hash, location: "class", reason: "" };

  try {
    let db = (await connectDB).db("dimicheck_database24");
    await db.collection("users").insertOne(user);
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  } catch (error) {
    return NextResponse.json({ status: 500, error });
  }
}
