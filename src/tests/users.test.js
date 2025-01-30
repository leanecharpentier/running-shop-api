import { deepEqual, strictEqual } from "assert";
import { afterEach, describe, it } from "mocha";

import userController from "../controllers/users.controller.js";
import { User } from "../models/User.js";
import { clearDatabase } from "../tools/db.js";

describe("createUser", () => {
    afterEach(async function () {
        await clearDatabase();
    });
    it("Should add user", async () => {
        const user = {
            role: "admin",
            firstName: "Léane",
            lastName: "Charpentier",
            email: "leane@mailtest.com",
            password: "azerty123456",
            phone: "0612345678",
            company: "LaCharpente Prod",
        };
        const req = {
            body: user,
        };
        const res = {
            status: function (status) {
                strictEqual(status, 201);
                return {
                    json: function (data) {
                        this.json = data;
                        return data;
                    },
                };
            },
        };
        const result = await userController.createUser(req, res);
        strictEqual(result, "User created");

        user.idUser = 1;
        const users = await User.findAll({});
        strictEqual(users.length, 1);
        deepEqual(users[0].dataValues, user);
    });
    it("Should return 400 => role isn't allow", async () => {
        const user = {
            role: "badRole",
            firstName: "Léane",
            lastName: "Charpentier",
            email: "leane@mailtest.com",
            password: "azerty123456",
            phone: "0612345678",
            company: "LaCharpente Prod",
        };
        const req = {
            body: user,
        };
        const res = {
            status: function (status) {
                strictEqual(status, 400);
                return {
                    json: function (data) {
                        this.json = data;
                        return data;
                    },
                };
            },
        };
        const result = await userController.createUser(req, res);
        strictEqual(
            result[0].message,
            '"role" must be one of [admin, commercial, logisticsManager, deliveryMan, supplier, client]'
        );
    });
    it("Should return 400 => password is required", async () => {
        const user = {
            role: "admin",
            firstName: "Léane",
            lastName: "Charpentier",
            email: "leane@mailtest.com",
            phone: "0612345678",
            company: "LaCharpente Prod",
        };
        const req = {
            body: user,
        };
        const res = {
            status: function (status) {
                strictEqual(status, 400);
                return {
                    json: function (data) {
                        this.json = data;
                        return data;
                    },
                };
            },
        };
        const result = await userController.createUser(req, res);
        strictEqual(result[0].message, '"password" is required');
    });
});
