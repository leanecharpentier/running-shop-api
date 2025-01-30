import { strictEqual } from "assert";
import jwt from "jsonwebtoken";
import { afterEach, describe, it } from "mocha";

import isAuthenticated from "../middlewares/authentification.js";
import { clearDatabase } from "../tools/db.js";

const SECRET_KEY = process.env.SECRET_KEY;

describe("User : isAuthenticated()", () => {
    afterEach(async function () {
        await clearDatabase();
    });
    it("Should return next", async () => {
        const token = jwt.sign(
            {
                userId: "userId",
            },
            SECRET_KEY,
            {
                expiresIn: 24 * 60 * 60,
            }
        );
        const req = {
            header: function () {
                return token;
            },
        };
        const res = {
            status: function (status) {
                strictEqual(status, 401);
                return {
                    json: function (data) {
                        this.json = data;
                        return data;
                    },
                };
            },
        };
        let nextCalled = false;
        const next = () => {
            nextCalled = true;
        };
        await isAuthenticated(req, res, next);
        strictEqual(nextCalled, true);
    });
    it("Should 401 Invalid token => no token send", async () => {
        const req = {
            header: function () {},
        };
        const res = {
            status: function (status) {
                strictEqual(status, 401);
                return {
                    json: function (data) {
                        this.json = data;
                        return data;
                    },
                };
            },
        };
        const next = {};
        const result = await isAuthenticated(req, res, next);
        strictEqual(result, "Invalid Token");
    });
    it("Should 401 Invalid token => token mal formed", async () => {
        const req = {
            header: function () {
                return "token";
            },
        };
        const res = {
            status: function (status) {
                strictEqual(status, 401);
                return {
                    json: function (data) {
                        this.json = data;
                        return data;
                    },
                };
            },
        };
        const next = {};
        const result = await isAuthenticated(req, res, next);
        strictEqual(result, "Invalid Token");
    });
});
