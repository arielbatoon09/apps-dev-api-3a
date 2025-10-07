import { Router } from "express";

const router = Router();

router.get("/test", function(req, res) {
  return res.status(200).json({
    "message": "Hello World!",
    "status": "success"
  })
})

export default router;