"use server";

import { PrismaClient } from "@prisma/client";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

const prisma = new PrismaClient();

export async function getLatestProducts() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    take: LATEST_PRODUCTS_LIMIT,
  });
  return convertToPlainObject(products);
}

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}
