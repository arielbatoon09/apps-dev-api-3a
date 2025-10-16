import ProductRepository from "@/repositories/ProductRepository";
import { IProduct } from "@/types/product";

export async function createProductService(data: IProduct) {
  // Validate the fields
  if (!data.name || !data.description || data.price === undefined || data.stock === undefined ) {
    return {
      status: "error",
      message: "Missing fields."
    }
  }

  // Check if price and stock are valid numbers
  if (data.price < 1 || data.stock < 1) {
    return {
      status: "error",
      message: "Price / stocks are not valid numbers."
    }
  }

  // Create Product
  const result = await ProductRepository.create({
    name: data.name,
    description: data.description,
    price: data.price,
    stock: data.stock
  });

  return {
    status: "success",
    message: "Created product successfully!",
    data: result
  }
}