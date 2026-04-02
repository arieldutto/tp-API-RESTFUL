import express, { Request, Response } from 'express';
import swaggerUi from "swagger-ui-express";
import { specs } from "./config/swagger";
/**
 * Carga las variables de entorno
 */
process.loadEnvFile();
import connectDB from './config/database';
import bookRoutes from './routes/book.routes';

const app = express();
// Obtener el puerto desde process.env (y dar un valor por defecto por si acaso)
const PORT = process.env.PORT || 3000;

/**
 * Middleware para entender JSON
 */
app.use(express.json());

/**
 * Ruta de prueba rápida (Temporal)
 */
app.get('/', (req: Request, res: Response) => {
    res.send('¡Servidor de Biblioteca funcionando!');
});
/**
 * Documentación de la API
 */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

/**
 * Conexión a la base de datos
 */
connectDB();
/**
 * Rutas de la API
 */
app.use('/api/books', bookRoutes);

/**
 * Iniciar el servidor
 */
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
