import { DataTypes } from "sequelize";

import db_instance from "../config/db.js";

export const User = db_instance.define(
    "User",
    {
        idUser: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [["admin", "commercial", "logisticsManager", "deliveryMan", "supplier", "client"]],
            },
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
        },
        company: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "Users",
        timestamps: false,
    }
);
