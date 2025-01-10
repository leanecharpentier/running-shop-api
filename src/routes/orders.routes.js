import { Router } from "express";

import ordersController from "../controllers/orders.controller.js";
import isAuthenticated from "../middlewares/authentification.js";

const router = Router();

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     description: Get order by id
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of order you want information
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Return the order that correspond to the id give in parameters
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Order'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Error Server
 */
router.get("/:id", isAuthenticated, ordersController.getOrderById);

/**
 * @swagger
 * /orders:
 *   get:
 *     description: Get all orders
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: query
 *         name: idOrder
 *         schema:
 *           type: string
 *           description: Id of order
 *       - in: query
 *         name: idUser
 *         schema:
 *           type: string
 *           description: Id of supplier
 *     responses:
 *       200:
 *         description: Return an array of orders that correspond to the given parameters
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Order'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Error Server
 */
router.get("/", isAuthenticated, ordersController.getOrders);

/**
 * @swagger
 * /orders:
 *   post:
 *     description: Add order
 *     tags:
 *       - Orders
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: Order Created
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Error Server
 */
router.post("/", isAuthenticated, ordersController.createOrder);

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     description: Update order
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of order to updated
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Order Updated
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Error Server
 */
router.put("/:id", isAuthenticated, ordersController.updateOrder);

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     description: Delete order
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of order to deleted
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order Deleted
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Error Server
 */
router.delete("/:id", isAuthenticated, ordersController.deleteOrder);

export default router;
