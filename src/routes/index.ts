import { Router } from "express";
import ProductController from "@/controllers/ProductController";

const router = Router();

router.get("/v1/product-list", ProductController.getAllProducts);
router.post("/v1/product-create", ProductController.createProduct);
router.post("/v1/product-update", ProductController.updateProduct);

export default router;