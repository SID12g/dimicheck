import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const formData = await request.formData();
  const number = formData.get("number");
  const password: string | any = formData.get("password")?.toString();
  const hash = await bcrypt.hash(password, 10);
  const user = { number, hash, location: "class", reason: "" };

  let db = (await connectDB).db("dimicheck_database24");
  await db.collection("users").insertOne(user);
  return NextResponse.json(200);
}
