import express from "express";
import cors from "cors";
import { createServer } from "http";

import dotenv from "dotenv";

dotenv.config();

export default class Server {
    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(
            express.urlencoded({
                extended: false,
            }),
        );

        this.app.use(function (_req, res) {
            res.send("Hello World!");
        });

        this.server = createServer(this.app);
    }

    start() {
        this.server.listen(process.env.PORT, async () => {
            console.info(`Server is running on port ${process.env.PORT}`);
        });
    }
}
