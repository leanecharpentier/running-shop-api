import { Router } from "express";

import loginController from "../controllers/login.controller.js";

const router = Router();

/**
 * @swagger
 * /login:
 *   post:
 *     description: Login
 *     tags:
 *       - Login
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
 *               $ref: '#/components/schemas/LoginResponse'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Error Server
 */
router.post("/login", loginController.login);

export default router;
