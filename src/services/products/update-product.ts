import ProductRepository from "@/repositories/ProductRepository";
import { ProductData } from "@/types/product";

// Update Products
export async function updateProductService(id: string, data: ProductData) {
  // If provided product id
  if (!id) {
    return {
      status: "error",
      message: "Missing ID field!"
    }
  }

  // Check if product exists
  const existingProduct = await ProductRepository.findById(id);
  if (!existingProduct) {
    return {
      status: "error",
      message: "Not found Product!"
    }
  }

  // Validate price and stock
  if (data.price < 1 || data.stock < 1) {
    return {
      status: "error",
      message: "Price / stocks are not valid numbers."
    }
  }

  // Update Data
  const result = await ProductRepository.update(id, data);

  return {
    status: "success",
    message: "Updated product successfully!",
    data: result
  }
}

// Restore Product Status
export async function restoreProductService(id: string) {
  // If provided product id
  if (!id) {
    return {
      status: "error",
      message: "Missing ID field!"
    }
  }

  // Check if product exists
  const existingProduct = await ProductRepository.findById(id);
  if (!existingProduct) {
    return {
      status: "error",
      message: "Not found Product!"
    }
  }

  // Validate if Product is already activated
  if (existingProduct.isActive) {
    return { status: "error", message: "Product is already activated!" };
  }

  // Restore Product from the database
  await ProductRepository.restore(id);

  return {
    status: "success",
    message: `Restored Product ID: ${id} successfully!`,
    data: null
  }
}