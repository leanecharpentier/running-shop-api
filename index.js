import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";



import db_instance from "./src/config/db.js";
import usersController from "./src/routes/users.routes.js";





dotenv.config();
const VERSION = "v1";

const app = express();
app.use(cors());
app.use(express.json());

app.use(`/api/${VERSION}/users`, usersController);

app.use(function (_req, res) {
    res.send("Hello World!");
});

const server = createServer(app);
server.listen(process.env.PORT, async () => {
    console.info(`Server is running on port ${process.env.PORT}`);
});

try {
    await db_instance.authenticate();
    await db_instance.sync();
    console.log("Connexion database ok");
} catch (error) {
    console.error(error);
}