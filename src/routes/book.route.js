import express from "express";
import BookController from "../controllers/book.controller.js";

const router = express.Router();
router
  .get("/", BookController.find)
  .get("/:id", BookController.findById)
  .post("/", BookController.add)
  .put("/:id", BookController.update)
  .delete("/:id", BookController.delete);

export default router;
