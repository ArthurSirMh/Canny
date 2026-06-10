import { Router } from "express";

import featureRoutes from "./feature.routes";

import usersRoutes from "./user.routes"
import { createUser } from "../controllers/users.controller";
import authRoutes from "./auth.routes"
const router = Router();


router.use("/features", featureRoutes);
router.use("/users", usersRoutes);
router.use("/auth", authRoutes);



export default router;