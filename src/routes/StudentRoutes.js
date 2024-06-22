import express from "express";
import {
  createStudentController,
  loginStudentController,
  studentController,
  studentDetailController,
} from "../controllers/studentController.js";
const router = express.Router();

router.get("/", studentController);

router.get("/detail", studentDetailController);

router.post("/create", createStudentController);

router.post("/login", loginStudentController);

export default router;
