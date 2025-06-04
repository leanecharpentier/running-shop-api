import { DataTypes } from "sequelize";

import { User } from "./User.js";

import db_instance from "../config/db.js";

export const Order = db_instance.define(
    "Order",
    {
        idOrder: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        priceTotal: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        deliveryCosts: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        orderDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        deliveryAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deliveryBilling: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deliveryDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        idRound: {
            type: DataTypes.INTEGER,
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "idUser",
            },
        },
    },
    {
        tableName: "Orders",
        timestamps: false,
    }
);

User.hasMany(Order, { foreignKey: "idUser" });
Order.belongsTo(User, { foreignKey: "idUser" });
