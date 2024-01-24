import { Router } from "express";
import { Jwtverify } from "../middlewares/verifyJwt.js";
import { LoginController,ProfileController,DeleteController,EmailController,NameController,PasswordController } from "../controllers/User.js";


export const account=Router()

account.post('/account', LoginController)
account.get('/account/profile', Jwtverify,ProfileController)
account.patch('/account/email', Jwtverify, EmailController)
account.patch('/account/password', Jwtverify, PasswordController)
account.patch('/account/name', Jwtverify, NameController)
account.delete('/account/delete', Jwtverify, DeleteController)



