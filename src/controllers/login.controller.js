import jwt from "jsonwebtoken";

import { User } from "../models/User.js";

const SECRET_KEY = process.env.SECRET_KEY;

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
            return res.status(200).json({ userId: user.idUser, token: token });
        }
        return res.status(401).json("Unauthorized");
    } catch (error) {
        return res.status(500).json("Internal Error Server");
    }
}

export default { login };
