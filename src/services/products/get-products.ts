import ProductRepository from "@/repositories/ProductRepository"

// Get All Products
export async function getAllProductsService() {
  const result = await ProductRepository.findAll();

  return {
    status: "success",
    message: "Successfully fetched all products!",
    data: result
  }
}

// Get All Active Products
export async function getAllActiveProductsService() {
  const result = await ProductRepository.findAllActive();

  return {
    status: "success",
    message: "Successfully fetched all the active products!",
    data: result
  }
}

// Get Product By ID
export async function getProductByIdService(id: string) {
  // Check if Product ID was provided
  if (!id) {
    return { status: "error", message: "Product ID was not provided!" };
  }

  // Check if the Product is existing
  const existingProduct = await ProductRepository.findById(id);
  if (!existingProduct) {
    return { status: "error", message: "Product not found!" };
  }

  return {
    status: "success",
    message: `Fetched Product ID: ${id} successfully!`,
    data: existingProduct
  }
}