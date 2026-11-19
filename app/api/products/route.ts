
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

// GET: সব active products দেখাবে
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      where: {
        isActive: true,
      },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("GET Products Error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// POST: নতুন product তৈরি করবে
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      slug,
      description,
      price,
      oldPrice,
      image,
      categoryId,
      isFeatured,
    } = body;

    if (!name || !slug || price === undefined || !image || !categoryId) {
      return NextResponse.json(
        { success: false, message: "Required fields are missing" },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        name,
        slug,
        description,
        price,
        oldPrice,
        image,
        categoryId,
        isFeatured: isFeatured ?? false,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Product created successfully",
        product,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST Product Error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to create product" },
      { status: 500 }
    );
  }
}
