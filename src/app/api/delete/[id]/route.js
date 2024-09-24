import connectDB from "@/lib/connectDB";
import Product from "@/models/productModels";
import { NextResponse } from "next/server";

export  async function DELETE(request, content) {
  await connectDB(); // Assuming this connects to your MongoDB or database

  try {
    const id = content.params.id;
    if (!id) {
      return NextResponse.json({ result: "User ID not provided", success: false }, { status: 400 });
    }

    const user = await Product.findByIdAndDelete(id);
    if (!user) {
      return NextResponse.json({ result: "User not found", success: false }, { status: 404 });
    }

    
    return NextResponse.json({ result: "User deleted", success: true }, { status: 200 });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json({ result: "Internal Server Error", success: false }, { status: 500 });
  }
}
