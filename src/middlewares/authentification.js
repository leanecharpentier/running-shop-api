import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY;

export default async function isAuthenticated(req, res, next) {
    try {
        let token = req.header("Authorization");
        if (token == undefined) {
            return res.status(401).json("Invalid Token");
        }
        token = token.replace("Bearer ", "");
        const decodedToken = jwt.verify(token, SECRET_KEY);
        if (!decodedToken) {
            return res.status(401).json("Invalid Token");
        }
        req.auth = {
            userId: decodedToken.userId,
        };
        next();
    } catch (error) {
        return res.status(401).json("Invalid Token");
    }
}
