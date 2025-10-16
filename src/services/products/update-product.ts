import ProductRepository from "@/repositories/ProductRepository";
import { IProduct } from "@/types/product";

export async function updateProductService(id: string, data: IProduct) {
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