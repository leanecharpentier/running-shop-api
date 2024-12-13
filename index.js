const { Db } = await import("./src/config/db.js");
const db = new Db();
await db.connect();

const { Server } = await import("./src/server/server.js");
const server = new Server();
server.start();
