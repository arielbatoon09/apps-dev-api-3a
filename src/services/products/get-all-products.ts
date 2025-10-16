import ProductRepository from "@/repositories/ProductRepository"

export async function getAllProductsService() {
  const result = await ProductRepository.findAll();

  return {
    status: "success",
    message: "Successfully fetched all products!",
    data: result
  }
}