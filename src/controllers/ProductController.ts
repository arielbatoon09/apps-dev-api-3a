import { Request, Response } from "express";
import { createProductService, getAllProductsService, updateProductService } from "@/services/products";

class ProductController {
  // Get All Products
  async getAllProducts(req: Request, res: Response) {
    const result = await getAllProductsService();

    return res.status(200).json(result);
  } 

  // Create Product
  async createProduct(req: Request, res: Response) {
    const result = await createProductService(req.body);

    // Check if error
    if (result.status === "error") {
      res.status(400).json(result);
    }

    // If success
    return res.status(201).json(result);
  }

  // Update Product
  async updateProduct(req: Request, res: Response) {
    const { id, ...data } = req.body;

    const result = await updateProductService(id, data);

    if (result.status === "error") {
      res.status(400).json(result);
    }

    return res.status(200).json(result);
  }
}

export default new ProductController();