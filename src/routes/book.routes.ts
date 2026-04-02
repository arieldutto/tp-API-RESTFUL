import { Router } from "express";
import { createBook, getAllBooks, getBookById, updateBook, deleteBook } from "../controllers/book.controller";

const router = Router();
// Rutas base (no necesita de id)

router.post("/", createBook);
router.get("/", getAllBooks);

// Rutas con id 
router.get("/:id", getBookById);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
