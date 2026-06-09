import { Router } from "express";

import featureRoutes from "./feature.routes";

import usersRoutes from "./user.routes"

const router = Router();


router.use("/features", featureRoutes);
router.use("/users", usersRoutes);


export default router;