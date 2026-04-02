import mongoose, { Schema, Document } from "mongoose";

// Definimos la interfaz que representa un documento de MongoDB
interface IBook extends Document {
    title: string;
    author: string;
    publishedYear: number;
    genre: string;
    available: boolean;
}
// Definimos el esquema de Mongoose
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
    publishedYear?: {
        type: Number
    },
    genre?: {
        type: String
    },
    available: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });
// Exportamos el modelo
const Book = mongoose.model<IBook>("Book", BookSchema);
export default Book;


