import { Router } from "express";

import usersController from "../controllers/users.controller.js";

const router = Router();

/**
 * @swagger
 * /users/login:
 *   post:
 *     description: Login
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Return a token
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: token
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Error Server
 */
router.post("/login", usersController.login);

export default router;
