import { Router } from "express";
import featureRoutes from "./feature.routes";
import usersRoutes from "./user.routes"
import authRoutes from "./auth.routes"
import feedbackRoutes from "./feedback.routes";
const router = Router();


router.use("/features", featureRoutes);
router.use("/feedbacks", feedbackRoutes);
router.use("/users", usersRoutes);
router.use("/auth", authRoutes);



export default router;