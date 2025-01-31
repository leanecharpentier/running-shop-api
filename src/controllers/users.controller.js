import Joi from "joi";

import { User } from "../models/User.js";

const roleSchema = Joi.string()
    .required()
    .valid("admin", "commercial", "logisticsManager", "deliveryMan", "supplier", "client");

const userSchema = Joi.object().keys({
    role: roleSchema,
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.string(),
    company: Joi.string(),
});

async function getUsersByRole(req, res) {
    const role = req.params.role;
    try {
        await roleSchema.required().validateAsync(role);
    } catch (error) {
        return res.status(400).json(error.details);
    }
    try {
        const users = await User.findAll({
            where: { role },
        });
        if (!users || users.length == 0) {
            return res.status(404).json("No data found");
        }
        const result = users.map((user) => {
            return user.dataValues;
        });

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json("Internal Error Server");
    }
}

async function getUserById(req, res) {
    const id = req.params.id;
    try {
        const user = await User.findOne({
            where: { idUser: id },
        });
        if (!user || user.length == 0) {
            return res.status(404).json("No data found");
        }
        return res.status(200).json(user.dataValues);
    } catch (error) {
        return res.status(500).json("Internal Error Server");
    }
}

async function createUser(req, res) {
    try {
        await userSchema.validateAsync(req.body);
    } catch (error) {
        return res.status(400).json(error.details);
    }
    try {
        await User.create(req.body);
        return res.status(201).json("User created");
    } catch (error) {
        return res.status(500).json("Internal Error Server");
    }
}

async function updateUser(req, res) {
    try {
        await userSchema.validateAsync(req.body);
    } catch (error) {
        return res.status(400).json(error.details);
    }
    const userId = req.params.id;
    try {
        const user = await User.findOne({
            where: { idUser: userId },
        });
        if (!user) {
            return res.status(404).json("No data found");
        }
        user.set(req.body);
        await user.save();
        return res.status(200).json("User updated");
    } catch (error) {
        return res.status(500).json("Internal Error Server");
    }
}

async function deleteUser(req, res) {
    const userId = req.params.id;
    try {
        await User.destroy({
            where: { idUser: userId },
        });
        return res.status(200).json("User deleted");
    } catch (error) {
        return res.status(500).json("Internal Error Server");
    }
}

export default { getUsersByRole, getUserById, createUser, updateUser, deleteUser };
