# 📚 API RESTful - Biblioteca Digital

Breve descripción: Esta es una API RESTful construida con Node.js, Express, TypeScript y MongoDB aplicando el patrón de diseño MVC, desarrollada para el trabajo práctico de la Diplomatura Backend.

## 🛠️ Tecnologías utilizadas
- Node.js
- Express
- TypeScript
- MongoDB (Mongoose)

## ⚙️ Instalación y Configuración

1. Clonar el repositorio:
   \`\`\`bash
   git clone https://github.com/arieldutto/tp-API-RESTFUL.git
   \`\`\`

2. Instalar las dependencias:
   \`\`\`bash
   npm install
   \`\`\`

3. Configurar variables de entorno:
   Renombra el archivo \`src/env.example\` a \`.env\` y asegúrate de configurar tu conexión a MongoDB:
   \`\`\`text
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/biblioteca
   \`\`\`

4. Ejecutar el servidor en modo desarrollo:
   \`\`\`bash
   npx tsx src/index.ts
   \`\`\`

## 🚀 Endpoints de la API

| Método | Ruta | Descripción |
| ------ | ---- | ----------- |
| \`GET\` | \`/api/books\` | Listar todos los libros |
| \`GET\` | \`/api/books/:id\` | Obtener un libro por ID |
| \`POST\` | \`/api/books\` | Crear un nuevo libro |
| \`PATCH\`| \`/api/books/:id\` | Actualizar un libro existente |
| \`DELETE\`| \`/api/books/:id\` | Eliminar un libro |

## 📖 Documentación de la API (Swagger)

Esta API incluye documentación interactiva generada con **Swagger**. 
Para probar los endpoints directo desde el navegador, asegúrate de tener el servidor corriendo y visita:

👉 **[http://localhost:3000/api-docs](http://localhost:3000/api-docs)**