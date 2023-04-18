import express from "express";
import AutorController from "../controllers/author.controller.js";

const router = express.Router();

router
  .get("/", AutorController.find)
  .get("/:id", AutorController.findById)
  .post("/", AutorController.create)
  .put("/:id", AutorController.update)
  .delete("/:id", AutorController.delete);

export default router;
