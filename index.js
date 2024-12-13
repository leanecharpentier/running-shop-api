import Db from "./src/config/db.js";
import Server from "./src/server/server.js";

async function init() {
    const db = new Db();
    await db.connect();

    const server = new Server();
    server.start();
}

init();
