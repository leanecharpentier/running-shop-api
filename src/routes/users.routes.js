import { Router } from "express";

import usersController from "../controllers/users.controller.js";
import isAuthenticated from "../middlewares/authentification.js";

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
 *               $ref: '#/components/schemas/LoginResponse'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Error Server
 */
router.post("/login", usersController.login);

/**
 * @swagger
 * /users/{role}:
 *   get:
 *     description: Get users by role
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: role
 *         schema:
 *           $ref: '#/components/schemas/RoleEnum'
 *     responses:
 *       200:
 *         description: Return an array with all users with the role send in parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Error Server
 */
router.get("/:role", isAuthenticated, usersController.getUsersByRole);

export default router;
