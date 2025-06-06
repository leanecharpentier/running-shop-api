// seed.js
import db from "../config/db.js";
import { Order } from "../models/Order.js";
import { Product } from "../models/Product.js";
import { User } from "../models/User.js";

export async function seedDatabase() {
    try {
        await db.sync({ force: true });

        const user1 = await User.create({
            role: "admin",
            firstName: "Léane",
            lastName: "Charpentier",
            email: "leane@example.com",
            password: "password",
            phone: "0612345678",
            company: "LaCharpenteProd",
        });
        const user2 = await User.create({
            role: "admin",
            firstName: "Toto",
            lastName: "Toto",
            email: "toto@toto.fr",
            password: "toto",
            phone: "0612345678",
            company: "TotoProd",
        });

        await Order.create({
            priceTotal: 100,
            deliveryCosts: 10,
            orderDate: new Date(),
            deliveryAddress: "123 rue de Paris",
            deliveryBilling: "123 rue de Paris",
            deliveryDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
            idUser: user1.idUser,
        });

        await Product.create({
            label: "tshirt",
            gendered: "women",
            size: "M",
            colours: "blue",
            price: 25.99,
            quantity: 2,
            idUser: user1.idUser,
        });
        await Product.create({
            label: "tshirt",
            gendered: "women",
            size: "S",
            colours: "green",
            price: 25.99,
            quantity: 2,
            idUser: user1.idUser,
        });
        await Product.create({
            label: "tshirt",
            gendered: "men",
            size: "M",
            colours: "red",
            price: 25.99,
            quantity: 2,
            idUser: user1.idUser,
        });
        await Product.create({
            label: "tshirt",
            gendered: "men",
            size: "S",
            colours: "black",
            price: 25.99,
            quantity: 2,
            idUser: user1.idUser,
        });

        await Product.create({
            label: "short",
            gendered: "women",
            size: "M",
            colours: "blue",
            price: 25.99,
            quantity: 2,
            idUser: user1.idUser,
        });
        await Product.create({
            label: "short",
            gendered: "women",
            size: "S",
            colours: "green",
            price: 25.99,
            quantity: 2,
            idUser: user1.idUser,
        });
        await Product.create({
            label: "short",
            gendered: "men",
            size: "M",
            colours: "red",
            price: 25.99,
            quantity: 2,
            idUser: user1.idUser,
        });
        await Product.create({
            label: "short",
            gendered: "men",
            size: "S",
            colours: "black",
            price: 25.99,
            quantity: 2,
            idUser: user1.idUser,
        });

        await Product.create({
            label: "tshirt",
            gendered: "women",
            size: "M",
            colours: "blue",
            price: 25.99,
            quantity: 2,
            idUser: user2.idUser,
        });
        await Product.create({
            label: "tshirt",
            gendered: "men",
            size: "S",
            colours: "black",
            price: 25.99,
            quantity: 2,
            idUser: user2.idUser,
        });

        await Product.create({
            label: "short",
            gendered: "women",
            size: "M",
            colours: "blue",
            price: 25.99,
            quantity: 2,
            idUser: user2.idUser,
        });
        await Product.create({
            label: "short",
            gendered: "men",
            size: "S",
            colours: "black",
            price: 25.99,
            quantity: 2,
            idUser: user2.idUser,
        });

        console.log("✅ Base de données initialisée !");
    } catch (err) {
        console.error("❌ Erreur lors de l'initialisation :", err);
    }
}
