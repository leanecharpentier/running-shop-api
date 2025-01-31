import { deepEqual, strictEqual } from "assert";
import { afterEach, describe, it } from "mocha";

import userController from "../controllers/users.controller.js";
import { User } from "../models/User.js";
import { clearDatabase } from "../tools/db.js";

describe("User : getUsersByRole()", () => {
    afterEach(async function () {
        await clearDatabase();
    });
    it("Should get user with role admin", async () => {
        const users = [
            {
                role: "admin",
                firstName: "Léane",
                lastName: "Charpentier",
                email: "leane@mailtest.com",
                password: "azerty123456",
                phone: "0612345678",
                company: "LaCharpente Prod",
            },
            {
                role: "commercial",
                firstName: "Léa",
                lastName: "Granier",
                email: "lea@mailtest.com",
                password: "passwordLea",
                phone: "0612345678",
                company: "Lea Granier Prod",
            },
            {
                role: "logisticsManager",
                firstName: "Aubin",
                lastName: "Manceau",
                email: "aubin@mailtest.com",
                password: "motdepasse123",
                phone: "0612345678",
                company: "Aubin Prod",
            },
        ];
        await User.bulkCreate(users);

        const req = {
            params: {
                role: "admin",
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
        };
        const result = await userController.getUsersByRole(req, res);
        strictEqual(result.length, 1);
        users[0].idUser = 1;
        deepEqual(result[0], users[0]);
    });
    it("Should return 400 => role doesn't exist", async () => {
        const req = {
            params: {
                role: "role",
            },
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
        const result = await userController.getUsersByRole(req, res);
        strictEqual(
            result[0].message,
            '"value" must be one of [admin, commercial, logisticsManager, deliveryMan, supplier, client]'
        );
    });
    it("Should return 404 => want user with role logisticsManager but no user with this role un db", async () => {
        const users = [
            {
                role: "admin",
                firstName: "Léane",
                lastName: "Charpentier",
                email: "leane@mailtest.com",
                password: "azerty123456",
                phone: "0612345678",
                company: "LaCharpente Prod",
            },
            {
                role: "commercial",
                firstName: "Léa",
                lastName: "Granier",
                email: "lea@mailtest.com",
                password: "passwordLea",
                phone: "0612345678",
                company: "Lea Granier Prod",
            },
        ];
        await User.bulkCreate(users);

        const req = {
            params: {
                role: "logisticsManager",
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
        };
        const result = await userController.getUsersByRole(req, res);
        strictEqual(result, "No data found");
    });
});

describe("User : getUserById()", () => {
    afterEach(async function () {
        await clearDatabase();
    });
    it("Should get user by id", async () => {
        const users = [
            {
                role: "admin",
                firstName: "Léane",
                lastName: "Charpentier",
                email: "leane@mailtest.com",
                password: "azerty123456",
                phone: "0612345678",
                company: "LaCharpente Prod",
            },
            {
                role: "commercial",
                firstName: "Léa",
                lastName: "Granier",
                email: "lea@mailtest.com",
                password: "passwordLea",
                phone: "0612345678",
                company: "Lea Granier Prod",
            },
            {
                role: "logisticsManager",
                firstName: "Aubin",
                lastName: "Manceau",
                email: "aubin@mailtest.com",
                password: "motdepasse123",
                phone: "0612345678",
                company: "Aubin Prod",
            },
        ];
        await User.bulkCreate(users);

        const req = {
            params: {
                id: 2,
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
        };
        const result = await userController.getUserById(req, res);
        users[1].idUser = 2;
        deepEqual(result, users[1]);
    });
    it("Should return 404 No data found", async () => {
        const users = [
            {
                role: "admin",
                firstName: "Léane",
                lastName: "Charpentier",
                email: "leane@mailtest.com",
                password: "azerty123456",
                phone: "0612345678",
                company: "LaCharpente Prod",
            },
            {
                role: "commercial",
                firstName: "Léa",
                lastName: "Granier",
                email: "lea@mailtest.com",
                password: "passwordLea",
                phone: "0612345678",
                company: "Lea Granier Prod",
            },
            {
                role: "logisticsManager",
                firstName: "Aubin",
                lastName: "Manceau",
                email: "aubin@mailtest.com",
                password: "motdepasse123",
                phone: "0612345678",
                company: "Aubin Prod",
            },
        ];
        await User.bulkCreate(users);

        const req = {
            params: {
                id: 4,
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
        };
        const result = await userController.getUserById(req, res);
        strictEqual(result, "No data found");
    });
});

describe("User : createUser()", () => {
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

describe("User : updateUser()", () => {
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
        await User.create(user);
        const user1 = await User.findOne({ where: { email: user.email } });
        strictEqual(user.firstName, user1.dataValues.firstName);

        const req = {
            params: {
                id: 1,
            },
            body: {
                role: "admin",
                firstName: "Léa",
                lastName: "Granier",
                email: "leane@mailtest.com",
                password: "azerty123456",
                phone: "0612345678",
                company: "LaCharpente Prod",
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
        };
        const result = await userController.updateUser(req, res);
        strictEqual(result, "User updated");

        const user2 = await User.findOne({ where: { email: user.email } });
        strictEqual(user2.dataValues.firstName, "Léa");
    });
    it("Should return 404 No data found => User id doesn't exsit", async () => {
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
            params: {
                id: 2,
            },
            body: {
                role: "admin",
                firstName: "Léa",
                lastName: "Granier",
                email: "leane@mailtest.com",
                password: "azerty123456",
                phone: "0612345678",
                company: "LaCharpente Prod",
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
        };
        const result = await userController.updateUser(req, res);
        strictEqual(result, "No data found");
    });
});

describe("User : deleteUser()", () => {
    afterEach(async function () {
        await clearDatabase();
    });
    it("Should get user by id", async () => {
        const users = [
            {
                role: "admin",
                firstName: "Léane",
                lastName: "Charpentier",
                email: "leane@mailtest.com",
                password: "azerty123456",
                phone: "0612345678",
                company: "LaCharpente Prod",
            },
            {
                role: "commercial",
                firstName: "Léa",
                lastName: "Granier",
                email: "lea@mailtest.com",
                password: "passwordLea",
                phone: "0612345678",
                company: "Lea Granier Prod",
            },
            {
                role: "logisticsManager",
                firstName: "Aubin",
                lastName: "Manceau",
                email: "aubin@mailtest.com",
                password: "motdepasse123",
                phone: "0612345678",
                company: "Aubin Prod",
            },
        ];
        await User.bulkCreate(users);
        const user1 = await User.findOne({ where: { idUser: 2 } });
        strictEqual(user1.idUser, 2);

        const req = {
            params: {
                id: 2,
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
        };
        const result = await userController.deleteUser(req, res);
        strictEqual(result, "User deleted");
        const count = await User.count();
        strictEqual(count, 2);
        const user2 = await User.findOne({ where: { idUser: 2 } });
        strictEqual(user2, null);
    });
    it("Should do nothing => id user sent doesn't exist", async () => {
        const users = [
            {
                role: "admin",
                firstName: "Léane",
                lastName: "Charpentier",
                email: "leane@mailtest.com",
                password: "azerty123456",
                phone: "0612345678",
                company: "LaCharpente Prod",
            },
            {
                role: "commercial",
                firstName: "Léa",
                lastName: "Granier",
                email: "lea@mailtest.com",
                password: "passwordLea",
                phone: "0612345678",
                company: "Lea Granier Prod",
            },
            {
                role: "logisticsManager",
                firstName: "Aubin",
                lastName: "Manceau",
                email: "aubin@mailtest.com",
                password: "motdepasse123",
                phone: "0612345678",
                company: "Aubin Prod",
            },
        ];
        await User.bulkCreate(users);

        const req = {
            params: {
                id: 4,
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
        };
        const result = await userController.deleteUser(req, res);
        strictEqual(result, "User deleted");
    });
});
