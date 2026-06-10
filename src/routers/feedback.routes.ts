import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import { createFeatureSchema } from "../schemas/feature.schema";
import { createFeature } from "../controllers/fearures.controllers";
import { auth } from "../middlewares/auth.middleware";
import { createFeedbackSchema } from "../schemas/feedback.schema";
import { createFeedback, deleteFeedback } from "../controllers/feedback.controllers";
const router = Router();
router.post('/createFeedback', auth, validate(createFeedbackSchema), createFeedback)
router.post('/deleteFeedback', auth,  deleteFeedback)

export default router;