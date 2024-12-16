import { DataTypes } from "sequelize";

import db_instance from "../config/db.js";

export const User = db_instance.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM(
                "admin",
                "commercial",
                "logisticsManager",
                "deliveryMan",
                "supplier",
                "client"
            ),
            allowNull: false,
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
		schema: "users",
        timestamps: true,
    }
);
