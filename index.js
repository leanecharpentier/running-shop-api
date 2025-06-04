import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import path from "path";
import { Server } from "socket.io";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { fileURLToPath } from "url";

import db_instance from "./src/config/db.js";
import configureSocket from "./src/config/socketio.js";
import { seedDatabase } from "./src/database/seed.js";
import { swaggerOptions } from "./src/documentation/documentation.js";
import loginController from "./src/routes/login.routes.js";
import ordersController from "./src/routes/orders.routes.js";
import productsController from "./src/routes/products.routes.js";
import usersController from "./src/routes/users.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const VERSION = "v1";

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(`/api/${VERSION}`, loginController);
app.use(`/api/${VERSION}/users`, usersController);
app.use(`/api/${VERSION}/products`, productsController);
app.use(`/api/${VERSION}/orders`, ordersController);

app.use(function (_req, res) {
    res.send("Hello World!");
});

const server = createServer(app);
const io = new Server(server);
configureSocket(io);

server.listen(process.env.PORT, async () => {
    console.info(`Server is running on port ${process.env.PORT}`);
});

try {
    await db_instance.authenticate();
    await db_instance.sync();
    await seedDatabase();
    console.log("Connexion database ok");
} catch (error) {
    console.error(error);
}
