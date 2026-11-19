
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  try {
    await prisma.$connect();

    const categories = await prisma.category.count();
    const products = await prisma.product.count();
    const orders = await prisma.order.count();

    return NextResponse.json({
      success: true,
      message: "Panpie Database Connected Successfully!",
      database: {
        categories,
        products,
        orders,
      },
    });
  } catch (error) {
    console.error("Database connection error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed",
      },
      { status: 500 }
    );
  }
}
