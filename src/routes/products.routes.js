import { Router } from "express";

import productsController from "../controllers/products.controller.js";
import isAuthenticated from "../middlewares/authentification.js";

const router = Router();

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     description: Get product by id
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of product you want information
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Return the product that correspond to the id give in parameters
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Product'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Error Server
 */
router.get("/:id", isAuthenticated, productsController.getProductById);

/**
 * @swagger
 * /products:
 *   get:
 *     description: Get all products
 *     tags:
 *       - Products
 *     parameters:
 *       - in: query
 *         name: label
 *         schema:
 *           $ref: '#/components/schemas/LabelProductEnum'
 *       - in: query
 *         name: gendered
 *         schema:
 *           $ref: '#/components/schemas/GenderedProductEnum'
 *       - in: query
 *         name: size
 *         schema:
 *           $ref: '#/components/schemas/SizeProductEnum'
 *       - in: query
 *         name: colours
 *         schema:
 *           $ref: '#/components/schemas/ColoursProductEnum'
 *       - in: query
 *         name: idUser
 *         schema:
 *           type: string
 *           description: Id of supplier
 *     responses:
 *       200:
 *         description: Return an array of products that correspond to the given parameters
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Product'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Error Server
 */
router.get("/", isAuthenticated, productsController.getProducts);

/**
 * @swagger
 * /products:
 *   post:
 *     description: Add product
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Product Created
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Error Server
 */
router.post("/", isAuthenticated, productsController.createProduct);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     description: Update product
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of product to updated
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product Updated
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Error Server
 */
router.put("/:id", isAuthenticated, productsController.updateProduct);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     description: Delete product
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of product to deleted
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product Deleted
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Error Server
 */
router.delete("/:id", isAuthenticated, productsController.deleteProduct);

export default router;
