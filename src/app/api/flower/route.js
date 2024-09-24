import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"; // Import bcrypt
import User from "@/models/userModels";

// Function to connect to MongoDB
async function connectToDB() {
  await connectDB();
}

export async function GET(req) {
  try {
    // Connect to MongoDB
    await connectToDB();

    // Hash the password
    const hashedPassword = await bcrypt.hash("theroyaloak", 10); // 10 is the salt rounds

    // Create a new user with the hashed password
    const result = await User.create({ 
      username : "admin2Solution",
      password : hashedPassword // Use the hashed password
    });

    console.log("Added successfully");
    return NextResponse.json({
      result: result,
      msg: "Added successfully",
      status: 201
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ 
      msg: "Something went wrong",
      status: 400
    });
  }
}
