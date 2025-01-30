import Joi from "joi";

import { Order } from "../models/Order.js";

const orderSchema = Joi.object().keys({
    priceTotal: Joi.number().required(),
    deliveryCosts: Joi.number().required(),
    orderDate: Joi.date().iso().required(),
    deliveryAddress: Joi.string().required(),
    deliveryBilling: Joi.string().required(),
    deliveryDate: Joi.date().iso().required(),
    idRound: Joi.number(),
    idUser: Joi.number().required(),
});

async function getOrders(req, res) {
    const schema = Joi.object().keys({
        idRound: Joi.number(),
        idUser: Joi.number(),
    });
    try {
        await schema.validateAsync(req.query);
    } catch (error) {
        return res.status(400).json(error.details);
    }
    try {
        const orders = await Order.findAll({
            where: req.query,
        });
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json("Internal Error Server");
    }
}

async function getOrderById(req, res) {
    const id = req.params.id;
    try {
        const orders = await Order.findOne({
            where: { idOrder: id },
        });
        if (!orders || orders.length == 0) {
            return res.status(404).json("No data found");
        }
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json("Internal Error Server");
    }
}

async function createOrder(req, res) {
    try {
        await orderSchema.validateAsync(req.body);
    } catch (error) {
        return res.status(400).json(error.details);
    }
    try {
        await Order.create(req.body);
        return res.status(201).json("Order created");
    } catch (error) {
        return res.status(500).json("Internal Error Server");
    }
}

async function updateOrder(req, res) {
    try {
        await orderSchema.validateAsync(req.body);
    } catch (error) {
        return res.status(400).json(error.details);
    }
    const orderId = req.params.id;
    try {
        const order = await Order.findOne({
            where: { idOrder: orderId },
        });
        if (!order) {
            return res.status(404).json("No data found");
        }
        order.set(req.body);
        await order.save();
        return res.status(200).json("Order update");
    } catch (error) {
        return res.status(500).json("Internal Error Server");
    }
}

async function deleteOrder(req, res) {
    const orderId = req.params.id;
    try {
        await Order.destroy({
            where: { idOrder: orderId },
        });
        return res.status(200).json("Order deleted");
    } catch (error) {
        return res.status(500).json("Internal Error Server");
    }
}

export default { getOrders, getOrderById, createOrder, updateOrder, deleteOrder };
