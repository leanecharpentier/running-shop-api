import { strictEqual } from "assert";
import Joi from "joi";
import { afterEach, describe, it } from "mocha";

import loginController from "../controllers/login.controller.js";
import { User } from "../models/User.js";
import { clearDatabase } from "../tools/db.js";

describe("User : login()", () => {
    afterEach(async function () {
        await clearDatabase();
    });
    it("Should login user", async () => {
        const user = {
            role: "admin",
            firstName: "Léane",
            lastName: "Charpentier",
            email: "leane@mailtest.com",
            password: "azerty123456",
            phone: "0612345678",
            company: "LaCharpente Prod",
        };
        await User.create(user);

        const req = {
            body: {
                email: user.email,
                password: user.password,
            },
        };
        const res = {
            status: function (status) {
                strictEqual(status, 200);
                return {
                    json: function (data) {
                        this.json = data;
                        return data;
                    },
                };
            },
            header: function () {},
        };
        const result = await loginController.login(req, res);
        const schema = Joi.object()
            .keys({
                token: Joi.string(),
                userId: Joi.number().valid(1).required(),
            })
            .required();

        await schema.validateAsync(result);
    });
    it("Should return 404 No user found", async () => {
        const req = {
            body: {
                email: "leane@mailtest.com",
                password: "azerty123456",
            },
        };
        const res = {
            status: function (status) {
                strictEqual(status, 404);
                return {
                    json: function (data) {
                        this.json = data;
                        return data;
                    },
                };
            },
            header: function () {},
        };
        const result = await loginController.login(req, res);
        strictEqual(result, "No user found");
    });
    it("Should return 401 Unauthorized => incorrect password", async () => {
        const user = {
            role: "admin",
            firstName: "Léane",
            lastName: "Charpentier",
            email: "leane@mailtest.com",
            password: "azerty123456",
            phone: "0612345678",
            company: "LaCharpente Prod",
        };
        await User.create(user);

        const req = {
            body: {
                email: user.email,
                password: "password",
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
            header: function () {},
        };
        const result = await loginController.login(req, res);
        strictEqual(result, "Unauthorized");
    });
});
