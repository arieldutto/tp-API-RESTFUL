import express, { Request, Response } from 'express';

// 1. Cargar las variables de entorno
process.loadEnvFile();
import connectDB from './config/database';
import bookRoutes from './routes/book.routes';

const app = express();
// Obtener el puerto desde process.env (y dar un valor por defecto por si acaso)
const PORT = process.env.PORT || 3000;

// 2. Middleware para entender JSON
app.use(express.json());

// 3. Ruta de prueba rápida (Temporal)
app.get('/', (req: Request, res: Response) => {
    res.send('¡Servidor de Biblioteca funcionando!');
});

connectDB();
// 4. Rutas de la API
app.use('/api/books', bookRoutes);

// 5. Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
