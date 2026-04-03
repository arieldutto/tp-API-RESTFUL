import { Request, Response } from "express";
import Book from "../models/Book";

// 1. Crear un libro
/**
 * Crea un nuevo libro   
 * @param req 
 * @param res 
 */
export const createBook = async (req: Request, res: Response) => {
    try {
        const bookData = req.body;
        const newBook = new Book(bookData);
        await newBook.save();
        res.status(201).json({ success: true, data: newBook });
    } catch (error) {
        console.log("EL ERROR ES:", error);

        res.status(500).json({ success: false, message: "Error al crear el libro" });
    }
};

// 2. Obtener todos los libros
/**
 * Obtiene todos los libros 
 * @param req 
 * @param res 
 */
export const getAllBooks = async (req: Request, res: Response) => {
    try {
        const books = await Book.find();
        res.status(200).json({ success: true, data: books });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error al obtener los libros" });
    }
};

// 3. Obtener un libro por ID
/**
 * Obtiene un libro por ID 
 * @param req 
 * @param res 
 * @returns 
 */
export const getBookById = async (req: Request, res: Response) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ success: false, message: "Libro no encontrado" });
        }
        res.status(200).json({ success: true, data: book });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error al obtener el libro" });
    }
};

// 4. Actualizar un libro
/**
 * Actualiza un libro por ID 
 * @param req 
 * @param res 
 */
export const updateBook = async (req: Request, res: Response) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) {
            return res.status(404).json({ success: false, message: "Libro no encontrado" });
        }
        res.status(200).json({ success: true, data: book });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error al actualizar el libro" });
    }
};

// 5. Eliminar un libro
/**
 * Elimina un libro por ID 
 * @param req 
 * @param res 
 * @returns 
 */
export const deleteBook = async (req: Request, res: Response) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ success: false, message: "Libro no encontrado" });
        }
        res.status(200).json({ success: true, data: book });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error al eliminar el libro" });
    }
};

