import connectDB from "@/lib/connectDB";
import Inquiry from "@/models/inquirylistModels";
import { NextResponse } from "next/server";


// Function to connect to MongoDB
async function connectToDB() {
  await connectDB();
}

export async function GET(req) {
  try {
    // Connect to MongoDB
    await connectToDB();
    const result = await Inquiry.find();

    return NextResponse.json({
      "result" : result
    }, {
      status: 200
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      msg: "something went wrong"
    }, {
      status: 400
    });
  }
}