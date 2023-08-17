import express from "express";
import loginController from './controller.login.js'
import emailValidator from "../middleWare/emailValidator.js";
import passwordValidator from "../middleWare/passwordValidator.js";
const router = express.Router()

router.post('/',  emailValidator, passwordValidator, loginController.login)

export default router