import { Router } from "express";

import usersController from "../controllers/users.controller.js";

const router = Router();

router.post("/login", usersController.login);

export default router;
