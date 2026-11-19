
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

// GET: সব active categories
export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      where: {
        isActive: true,
      },
      include: {
        _count: {
          select: {
            products: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      count: categories.length,
      categories,
    });
  } catch (error) {
    console.error("GET Categories Error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}

// POST: নতুন category তৈরি
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, slug, image } = body;

    if (!name || !slug) {
      return NextResponse.json(
        { success: false, message: "Name and slug are required" },
        { status: 400 }
      );
    }

    const category = await prisma.category.create({
      data: {
        name,
        slug,
        image: image || null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Category created successfully",
        category,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST Category Error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to create category. Slug may already exist." },
      { status: 500 }
    );
  }
}
