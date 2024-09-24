import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import Inquirylist from "@/models/inquirylistModels";

async function connectToDB() {
  await connectDB();
}

export async function POST(req) {
  const body = await req.json();
 
 
  try {
    await connectToDB();
    const result = await Inquirylist.create(body);

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
