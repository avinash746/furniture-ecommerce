import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import Product from "@/models/productModels";

// Function to connect to MongoDB
async function connectToDB() {
  await connectDB();
}

export async function GET(req) {
  try {
    // Connect to MongoDB
    await connectToDB();
    const result = await Product.find();

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