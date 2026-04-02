/** 
 * Rutas de los libros  
 */
import { Router } from "express";
import { createBook, getAllBooks, getBookById, updateBook, deleteBook } from "../controllers/book.controller";

const router = Router();
// Rutas base (no necesita de id)
/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Obtiene todos los libros
 *     responses:
 *       200:
 *         description: Lista de libros
 *   post:
 *     summary: Crea un nuevo libro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title: { type: string }
 *               author: { type: string }
 *               publishedYear: { type: number }
 *               genre: { type: string }
 *               available: { type: boolean }
 *     responses:
 *       201:
 *         description: Libro creado
 */
router.post("/", createBook);
router.get("/", getAllBooks);

// Rutas con id 
/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Obtiene un libro por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Libro encontrado
 *   patch:
 *     summary: Actualiza un libro por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title: { type: string }
 *               author: { type: string }
 *               publishedYear: { type: number }
 *               genre: { type: string }
 *               available: { type: boolean }
 *     responses:
 *       200:
 *         description: Libro actualizado
 *   delete:
 *     summary: Elimina un libro por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Libro eliminado
 */
router.get("/:id", getBookById);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
