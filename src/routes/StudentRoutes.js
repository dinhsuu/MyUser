import express from "express";
import {
  createStudentController,
  studentController,
  studentDetailController,
} from "../controllers/studentController.js";
const router = express.Router();

router.get("/", studentController);

router.get("/detail", studentDetailController);

router.post("/create", createStudentController);

export default router;
