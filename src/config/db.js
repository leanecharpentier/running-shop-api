import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const db_instance = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
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
});

export default db_instance;
