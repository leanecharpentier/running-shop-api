import Joi from "joi";

import { Product } from "../models/Product.js";

const productSchema = Joi.object().keys({
    label: Joi.string().required().valid("tshirt", "short"),
    gendered: Joi.string().required().valid("women", "men"),
    size: Joi.string().required().valid("XS", "S", "M", "L", "XL"),
    colours: Joi.string()
        .required()
        .valid("black", "white", "red", "blue", "pink", "grey", "green", "purple", "yellow", "navy"),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
    idUser: Joi.number().required(),
});

async function getProducts(req, res) {
    const schema = Joi.object().keys({
        label: Joi.string().valid("tshirt", "short"),
        gendered: Joi.string().valid("women", "men"),
        size: Joi.string().valid("XS", "S", "M", "L", "XL"),
        colours: Joi.string().valid(
            "black",
            "white",
            "red",
            "blue",
            "pink",
            "grey",
            "green",
            "purple",
            "yellow",
            "navy"
        ),
        idUser: Joi.number(),
    });
    try {
        await schema.validateAsync(req.query);
    } catch (error) {
        return res.status(400).json(error.details);
    }
    try {
        const products = await Product.findAll({
            where: req.query,
        });
        if (products.length == 0 || !products) {
            return res.status(404).json("No data found");
        }
        const result = products.map((user) => {
            return user.dataValues;
        });
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json("Internal Error Server");
    }
}

async function getProductById(req, res) {
    const id = req.params.id;
    try {
        const product = await Product.findOne({
            where: { idProduct: id },
        });
        if (!product || product.length == 0) {
            return res.status(404).json("No data found");
        }
        return res.status(200).json(product.dataValues);
    } catch (error) {
        return res.status(500).json("Internal Error Server");
    }
}

async function createProduct(req, res) {
    try {
        await productSchema.validateAsync(req.body);
    } catch (error) {
        return res.status(400).json(error.details);
    }
    try {
        await Product.create(req.body);
        return res.status(201).json("Product created");
    } catch (error) {
        return res.status(500).json("Internal Error Server");
    }
}

async function updateProduct(req, res) {
    try {
        await productSchema.validateAsync(req.body);
    } catch (error) {
        return res.status(400).json(error.details);
    }
    const productId = req.params.id;
    try {
        const product = await Product.findOne({
            where: { idProduct: productId },
        });
        if (!product) {
            return res.status(404).json("No data found");
        }
        product.set(req.body);
        await product.save();
        return res.status(200).json("Product updated");
    } catch (error) {
        console.error(error);

        return res.status(500).json("Internal Error Server");
    }
}

async function deleteProduct(req, res) {
    const productId = req.params.id;
    try {
        await Product.destroy({
            where: { idProduct: productId },
        });
        return res.status(200).json("Product deleted");
    } catch (error) {
        return res.status(500).json("Internal Error Server");
    }
}

export default { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
