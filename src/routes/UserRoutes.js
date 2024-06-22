import express from "express";
import {
  createUserController,
  userController,
  userDetailController,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", userController);

router.get("/detail", userDetailController);

router.post("/create", createUserController);

export default router;
