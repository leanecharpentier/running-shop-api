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

/**
 * @swagger
 * components:
 *   schemas:
 *     PostUser:
 *       type: object
 *       required:
 *         - role
 *         - email
 *         - password
 *       properties:
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
 *         password:
 *           type: string
 *           example: "azerty123456"
 *         phone:
 *           type: string
 *           example: 0612345678
 *         company:
 *           type: string
 *           example: LaCharpente Prod
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     LabelProductEnum:
 *       type: string
 *       enum: ["tshirt", "short"]
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     GenderedProductEnum:
 *       type: string
 *       enum: ["women", "men"]
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SizeProductEnum:
 *       type: string
 *       enum: ["XS", "S", "M", "L", "XL"]
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ColoursProductEnum:
 *       type: string
 *       enum: ["black", "white", "red", "blue", "pink", "grey", "green", "purple", "yellow", "navy"]
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         label:
 *           schema:
 *             $ref: '#/components/schemas/LabelProductEnum'
 *           example: tshirt
 *         gendered:
 *           schema:
 *             $ref: '#/components/schemas/GenderedProductEnum'
 *           example: tshirt
 *         size:
 *           schema:
 *             $ref: '#/components/schemas/GenderedProductEnum'
 *           example: tshirt
 *         colours:
 *           schema:
 *             $ref: '#/components/schemas/ColoursProductEnum'
 *           example: tshirt
 *         price:
 *           type: number
 *         quantity:
 *           type: number
 *         idUser:
 *           type: string
 *           description: Id of supplier
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         priceTotal:
 *           type: number
 *         deliveryCosts:
 *           type: number
 *         orderDate:
 *           type: string
 *           format: date-time
 *         deliveryAddress:
 *           type: string
 *         deliveryBilling:
 *           type: string
 *         deliveryDate:
 *           type: string
 *           format: date-time
 *         idRound:
 *           type: string
 *           description: Id of order
 *         idUser:
 *           type: string
 *           description: Id of supplier
 */
