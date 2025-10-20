import ProductRepository from "@/repositories/ProductRepository";

// Hard Delete Product
export async function hardDeleteProductService(id: string) {
  // Check if Product ID was provided
  if (!id) {
    return { status: "error", message: "Product ID was not provided!" };
  }

  // Check if the Product is existing
  const existingProduct = await ProductRepository.findById(id);
  if (!existingProduct) {
    return { status: "error", message: "Product not found!" };
  }

  // Delete the product from the database
  await ProductRepository.delete(id);

  return {
    status: "success",
    message: `Deleted Product ID: ${id} successfully!`,
    data: null
  }
}

// Soft Delete Product
export async function softDeleteProductService(id: string) {
  // Check if Product ID was provided
  if (!id) {
    return { status: "error", message: "Product ID was not provided!" };
  }

  // Check if the Product is existing
  const existingProduct = await ProductRepository.findById(id);
  if (!existingProduct) {
    return { status: "error", message: "Product not found!" };
  }

  // Validate if Product is already deactivated
  if (!existingProduct.isActive) {
    return { status: "error", message: "Product is already deactivated!" };
  }

  // Deactivate the product from the database
  await ProductRepository.softDelete(id);

  return {
    status: "success",
    message: `Deactivated Product ID: ${id} successfully!`,
    data: null
  }
}