import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export default class Db {
    constructor() {
        this.sequelize = new Sequelize(
            process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASSWORD,
            {
                host: process.env.DB_HOST,
                dialect: process.env.DB_DIALECT,
                port: process.env.DB_PORT,
                logging: false,
                dialectOptions: {
                    options: {
                        encrypt: true,
                        trustServerCertificate: true,
                    },
                },
            },
        );
    }

    async connect() {
        try {
            await this.sequelize.authenticate();
            console.log("Database connected successfully.");
        } catch (error) {
            console.error("Unable to connect to the database:", error.message);
        }
    }

    getSequelizeInstance() {
        return this.sequelize;
    }
}
