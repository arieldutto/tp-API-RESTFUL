import { Document } from "mongoose";
/**
 * Interfaces de TypeScript para representar un libro
 */
export interface IBook extends Document {
    title: string;
    author: string;
    publishedYear?: number;
    genre?: string;
    available: boolean;
}