import mongoose, { Schema } from "mongoose";
import { IBook } from "../interfaces/book.interfaces";
/**
 * Modelo de libro  
 */
const BookSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    publishedYear: {
        type: Number
    },
    genre: {
        type: String
    },
    available: {
        type: Boolean,
        required: true,
        default: true
    },
}, { timestamps: true });
/**
 * Exportamos el modelo
 */
const Book = mongoose.model<IBook>("Book", BookSchema);
export default Book;


