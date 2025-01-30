import { before } from "mocha";

import { clearDatabase } from "./db.js";

import db_instance from "../config/db.js";

before(async function () {
    await init();
    await clearDatabase();
});

async function init() {
    try {
        await db_instance.authenticate();
        await db_instance.sync();
        console.log("Database connected");
    } catch (error) {
        console.log("Error when connecting to database");
    }
}
