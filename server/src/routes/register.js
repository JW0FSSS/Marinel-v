import { Router } from "express";
import { RegisterController } from "../controllers/User.js";

export const register = Router()

register.post('/register', RegisterController)