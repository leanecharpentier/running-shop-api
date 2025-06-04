import { DataTypes } from "sequelize";

import { User } from "./User.js";

import db_instance from "../config/db.js";

export const Product = db_instance.define(
    "Product",
    {
        idProduct: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [["tshirt", "short"]],
            },
        },
        gendered: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [["women", "men"]],
            },
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [["XS", "S", "M", "L", "XL"]],
            },
        },
        colours: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [
                    ["black", "white", "red", "blue", "pink", "grey", "green", "purple", "yellow", "navy"],
                ],
            },
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        tableName: "Products",
        timestamps: false,
    }
);

User.hasMany(Product, { foreignKey: "idUser" });
Product.belongsTo(User, { foreignKey: "idUser" });
