import { deepEqual, strictEqual } from "assert";
import { afterEach, describe, it } from "mocha";

import productController from "../controllers/products.controller.js";
import { Product } from "../models/Product.js";
import { User } from "../models/User.js";
import { clearDatabase } from "../tools/db.js";

describe("Product : getProductById()", () => {
    afterEach(async function () {
        await clearDatabase();
    });
    it("Should get product by id", async () => {
        const user = {
            role: "admin",
            firstName: "Léane",
            lastName: "Charpentier",
            email: "leane@mailtest.com",
            password: "azerty123456",
            phone: "0612345678",
            company: "LaCharpente Prod",
        };
        const products = [
            {
                label: "tshirt",
                gendered: "women",
                size: "XS",
                colours: "yellow",
                price: 25,
                quantity: 60,
                idUser: 1,
            },
            {
                label: "tshirt",
                gendered: "men",
                size: "L",
                colours: "black",
                price: 25,
                quantity: 60,
                idUser: 1,
            },
            {
                label: "short",
                gendered: "men",
                size: "S",
                colours: "red",
                price: 25,
                quantity: 60,
                idUser: 1,
            },
        ];
        await User.create(user);
        await Product.bulkCreate(products);

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
        const result = await productController.getProductById(req, res);
        products[1].idProduct = 2;
        deepEqual(result, products[1]);
    });
    it("Should return 404 No data found", async () => {
        const user = {
            role: "admin",
            firstName: "Léane",
            lastName: "Charpentier",
            email: "leane@mailtest.com",
            password: "azerty123456",
            phone: "0612345678",
            company: "LaCharpente Prod",
        };
        const products = [
            {
                label: "tshirt",
                gendered: "women",
                size: "XS",
                colours: "yellow",
                price: 25,
                quantity: 60,
                idUser: 1,
            },
            {
                label: "tshirt",
                gendered: "men",
                size: "L",
                colours: "black",
                price: 25,
                quantity: 60,
                idUser: 1,
            },
            {
                label: "short",
                gendered: "men",
                size: "S",
                colours: "red",
                price: 25,
                quantity: 60,
                idUser: 1,
            },
        ];
        await User.create(user);
        await Product.bulkCreate(products);

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
        const result = await productController.getProductById(req, res);
        strictEqual(result, "No data found");
    });
});

describe("Product : getProduct()", () => {
    afterEach(async function () {
        await clearDatabase();
    });
    it("Should get product by id", async () => {
        const user = {
            role: "admin",
            firstName: "Léane",
            lastName: "Charpentier",
            email: "leane@mailtest.com",
            password: "azerty123456",
            phone: "0612345678",
            company: "LaCharpente Prod",
        };
        const products = [
            {
                label: "tshirt",
                gendered: "women",
                size: "XS",
                colours: "yellow",
                price: 25,
                quantity: 60,
                idUser: 1,
            },
            {
                label: "tshirt",
                gendered: "men",
                size: "L",
                colours: "black",
                price: 25,
                quantity: 60,
                idUser: 1,
            },
            {
                label: "short",
                gendered: "men",
                size: "S",
                colours: "red",
                price: 25,
                quantity: 60,
                idUser: 1,
            },
        ];
        await User.create(user);
        await Product.bulkCreate(products);

        const req = {
            query: {
                label: "tshirt",
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
        const result = await productController.getProducts(req, res);
        strictEqual(result.length, 2);
    });
    it("Should return 404 No data found => No product with size M", async () => {
        const user = {
            role: "admin",
            firstName: "Léane",
            lastName: "Charpentier",
            email: "leane@mailtest.com",
            password: "azerty123456",
            phone: "0612345678",
            company: "LaCharpente Prod",
        };
        const products = [
            {
                label: "tshirt",
                gendered: "women",
                size: "XS",
                colours: "yellow",
                price: 25,
                quantity: 60,
                idUser: 1,
            },
            {
                label: "tshirt",
                gendered: "men",
                size: "L",
                colours: "black",
                price: 25,
                quantity: 60,
                idUser: 1,
            },
            {
                label: "short",
                gendered: "men",
                size: "S",
                colours: "red",
                price: 25,
                quantity: 60,
                idUser: 1,
            },
        ];
        await User.create(user);
        await Product.bulkCreate(products);

        const req = {
            query: {
                size: "M",
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
        const result = await productController.getProducts(req, res);
        strictEqual(result, "No data found");
    });
});

describe("Product : createProduct()", () => {
    afterEach(async function () {
        await clearDatabase();
    });
    it("Should add product", async () => {
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
        const product = {
            label: "tshirt",
            gendered: "women",
            size: "XS",
            colours: "yellow",
            price: 25,
            quantity: 60,
            idUser: 1,
        };
        const req = {
            body: product,
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
        const result = await productController.createProduct(req, res);
        strictEqual(result, "Product created");

        product.idProduct = 1;
        const products = await Product.findAll({});
        strictEqual(products.length, 1);
        deepEqual(products[0].dataValues, product);
    });
    it("Should return 400 => role isn't allow", async () => {
        const product = {
            label: "basket",
            gendered: "women",
            size: "XS",
            colours: "yellow",
            price: 25,
            quantity: 60,
            idUser: 1,
        };
        const req = {
            body: product,
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
        const result = await productController.createProduct(req, res);
        strictEqual(result[0].message, '"label" must be one of [tshirt, short]');
    });
    it("Should return 400 => password is required", async () => {
        const product = {
            label: "short",
            gendered: "women",
            colours: "yellow",
            price: 25,
            quantity: 60,
            idUser: 1,
        };
        const req = {
            body: product,
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
        const result = await productController.createProduct(req, res);
        strictEqual(result[0].message, '"size" is required');
    });
});

describe("Product : updateProduct()", () => {
    afterEach(async function () {
        await clearDatabase();
    });
    it("Should add product", async () => {
        const user = {
            role: "admin",
            firstName: "Léane",
            lastName: "Charpentier",
            email: "leane@mailtest.com",
            password: "azerty123456",
            phone: "0612345678",
            company: "LaCharpente Prod",
        };
        const product = {
            label: "tshirt",
            gendered: "women",
            size: "XS",
            colours: "yellow",
            price: 25,
            quantity: 60,
            idUser: 1,
        };
        await User.create(user);
        await Product.create(product);
        const product1 = await Product.findOne({ where: { idProduct: 1 } });
        strictEqual(product1.size, "XS");

        const req = {
            params: {
                id: 1,
            },
            body: {
                label: "tshirt",
                gendered: "women",
                size: "S",
                colours: "yellow",
                price: 25,
                quantity: 60,
                idUser: 1,
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
        const result = await productController.updateProduct(req, res);
        strictEqual(result, "Product updated");

        const product2 = await Product.findOne({ where: { idProduct: 1 } });
        strictEqual(product2.dataValues.size, "S");
    });
    it("Should return 404 No data found => Product id doesn't exsit", async () => {
        const user = {
            role: "admin",
            firstName: "Léane",
            lastName: "Charpentier",
            email: "leane@mailtest.com",
            password: "azerty123456",
            phone: "0612345678",
            company: "LaCharpente Prod",
        };
        const product = {
            label: "tshirt",
            gendered: "women",
            size: "XS",
            colours: "yellow",
            price: 25,
            quantity: 60,
            idUser: 1,
        };
        await User.create(user);
        await Product.create(product);
        const product1 = await Product.findOne({ where: { idProduct: 1 } });
        strictEqual(product1.size, "XS");

        const req = {
            params: {
                id: 2,
            },
            body: {
                label: "tshirt",
                gendered: "women",
                size: "S",
                colours: "yellow",
                price: 25,
                quantity: 60,
                idUser: 1,
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
        const result = await productController.updateProduct(req, res);
        strictEqual(result, "No data found");
    });
});

describe("Product : deleteProduct()", () => {
    afterEach(async function () {
        await clearDatabase();
    });
    it("Should get product by id", async () => {
        const user = {
            role: "admin",
            firstName: "Léane",
            lastName: "Charpentier",
            email: "leane@mailtest.com",
            password: "azerty123456",
            phone: "0612345678",
            company: "LaCharpente Prod",
        };
        const products = [
            {
                label: "tshirt",
                gendered: "women",
                size: "XS",
                colours: "yellow",
                price: 25,
                quantity: 60,
                idUser: 1,
            },
            {
                label: "tshirt",
                gendered: "men",
                size: "L",
                colours: "black",
                price: 25,
                quantity: 60,
                idUser: 1,
            },
            {
                label: "short",
                gendered: "men",
                size: "S",
                colours: "red",
                price: 25,
                quantity: 60,
                idUser: 1,
            },
        ];
        await User.create(user);
        await Product.bulkCreate(products);

        const product1 = await Product.findOne({ where: { idProduct: 2 } });
        strictEqual(product1.idProduct, 2);

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
        const result = await productController.deleteProduct(req, res);
        strictEqual(result, "Product deleted");
        const count = await Product.count();
        strictEqual(count, 2);
        const product2 = await Product.findOne({ where: { idProduct: 2 } });
        strictEqual(product2, null);
    });
    it("Should do nothing => id product sent doesn't exist", async () => {
        const user = {
            role: "admin",
            firstName: "Léane",
            lastName: "Charpentier",
            email: "leane@mailtest.com",
            password: "azerty123456",
            phone: "0612345678",
            company: "LaCharpente Prod",
        };
        const products = [
            {
                label: "tshirt",
                gendered: "women",
                size: "XS",
                colours: "yellow",
                price: 25,
                quantity: 60,
                idUser: 1,
            },
            {
                label: "tshirt",
                gendered: "men",
                size: "L",
                colours: "black",
                price: 25,
                quantity: 60,
                idUser: 1,
            },
            {
                label: "short",
                gendered: "men",
                size: "S",
                colours: "red",
                price: 25,
                quantity: 60,
                idUser: 1,
            },
        ];
        await User.create(user);
        await Product.bulkCreate(products);

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
        const result = await productController.deleteProduct(req, res);
        strictEqual(result, "Product deleted");
    });
});
