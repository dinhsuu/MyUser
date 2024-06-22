import express from "express";
import {
  createUserController,
  userController,
  userDetailController,
  loginUserController
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", userController);

router.get("/detail", userDetailController);

router.post("/create", createUserController);

router.post("/login", loginUserController);

export default router;
