import { DataTypes } from "sequelize";

import { User } from "./users.model.js";

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
            type: DataTypes.ENUM("tshirt", "short"),
            allowNull: false,
        },
        gendered: {
            type: DataTypes.ENUM("women", "men"),
            allowNull: false,
        },
        size: {
            type: DataTypes.ENUM("XS", "S", "M", "L", "XL"),
            allowNull: false,
        },
        colours: {
            type: DataTypes.ENUM(
                "black",
                "white",
                "red",
                "blue",
                "pink",
                "grey",
                "green",
                "purple",
                "yellow",
                "navy"
            ),
            allowNull: false,
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
            references: {
                model: User,
                key: "idUser",
            },
            allowNull: false,
        },
    },
    {
        tableName: "Products",
        schema: "products",
        timestamps: false,
    }
);

Product.hasOne(User);
