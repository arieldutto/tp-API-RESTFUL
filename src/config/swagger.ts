import swaggerJsdoc from "swagger-jsdoc";
/**
 * Configuración de Swagger
 */

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Biblioteca",
            version: "1.0.0",
            description: "API para Biblioteca Digital",
        },
    },
    apis: ["./src/routes/*.ts"],
};

export const specs = swaggerJsdoc(options);
