/**
 * @swagger
 * components:
 *   schemas:
 *     LoginResponse:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *         token:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RoleEnum:
 *       type: string
 *       enum: ["admin", "commercial", "logisticsManager", "deliveryMan", "supplier", "client"]
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 1
 *         role:
 *           schema:
 *             $ref: '#/components/schemas/RoleEnum'
 *           example: admin
 *         firstName:
 *           type: string
 *           example: Léane
 *         lastName:
 *           type: string
 *           example: Charpentier
 *         email:
 *           type: string
 *           example: "leane@testmail.com"
 *         phone:
 *           type: string
 *           example: 0612345678
 *         company:
 *           type: string
 *           example: LaCharpente Prod
 */
