export const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Running Shop API",
            version: "1.0.0",
            description: "API documentation using Swagger",
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}`,
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
    },
    apis: ["src/documentation/schemas.js", "src/routes/*.routes.js"],
};
