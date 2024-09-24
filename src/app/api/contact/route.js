import connectDB from "@/lib/connectDB";
import Contact from "@/models/contactModels";
import { NextResponse } from "next/server";

async function connectToDB() {
  await connectDB();
}

export async function POST(req) {
  const body = await req.json();
 
 
  try {
    await connectToDB();
    const result = await Contact.create(body);

    console.log("Added successflly")
    console.log(body)
    return NextResponse.json({
      result: result,
      msg: "Added successfully",
      status: 201
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ 
      msg: "something went wrong",
      status: 400
    });
  }
}
