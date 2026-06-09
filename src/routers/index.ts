import { Router } from "express";

import featureRoutes from "./feature.routes";


const router = Router();


router.use("/features", featureRoutes);



export default router;