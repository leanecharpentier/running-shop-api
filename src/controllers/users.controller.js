import Joi from "joi";
import jwt from "jsonwebtoken";

import { User } from "../models/users.model.js";

const SECRET_KEY = process.env.SECRET_KEY;

const userSchema = Joi.object().keys({
    role: Joi.string()
        .required()
        .valid("admin", "commercial", "logisticsManager", "deliveryMan", "supplier", "client"),
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.string(),
    company: Joi.string(),
});

async function login(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            attributes: ["idUser", "email", "password"],
            where: { email },
        });
        if (!user) {
            return res.status(404).json("No user found");
        }
        const expireIn = 24 * 60 * 60;
        if (user.password === password) {
            const token = jwt.sign(
                {
                    userId: user.idUser,
                },
                SECRET_KEY,
                {
                    expiresIn: expireIn,
                }
            );
            res.header("Authorization", "Bearer " + token);
            return res.status(200).json({ userId: user.userId, token: token });
        }
        res.status(401).json("Unauthorized");
    } catch (error) {
        return res.status(500).json("Internal Error Server");
    }
}

async function getUsersByRole(req, res) {
    const role = req.params.role;
    try {
        const users = await User.findAll({
            where: { role },
        });
        if (!users || users.length == 0) {
            return res.status(404).json("No data found");
        }
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json("Internal Error Server");
    }
}

async function getUserById(req, res) {
    const id = req.params.id;
    try {
        const users = await User.findOne({
            where: { idUser: id },
        });
        if (!users || users.length == 0) {
            return res.status(404).json("No data found");
        }
        return res.status(200).json(users);
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
        return res.status(200).json("User update");
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

export default { login, getUsersByRole, getUserById, createUser, updateUser, deleteUser };
