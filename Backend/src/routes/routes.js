import express from "express";
const router = express.Router();

//Imports
import userController from "../Controllers/userControllers/userController.js";


import { authentication, Authorization } from "../Middleware/Auth/Auth.js";



// API - USER
router.post("/login", userController.UserLogin);
router.post("/register", userController.Register);
router.get("/getuser",authentication,userController.getUser)








export default router;

