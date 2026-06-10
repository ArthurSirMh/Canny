import { Router } from "express";
import { createUser } from "../controllers/users.controller";
import { validate } from "../middlewares/validate.middleware";
import { createUserSchema } from "../schemas/user.schema";
import { login, signUp } from "../controllers/auth.controllers";

const router = Router()

router.post('/login', validate(createUserSchema), login)
router.post('/signup', validate(createUserSchema), signUp)

export default router;