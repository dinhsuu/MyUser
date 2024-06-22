import { createStudentServices } from "../services/StudentServices";

export const studentController = (req, res) => {
  console.log("Student 112");
};

export const studentDetailController = (req, res) => {
  console.log("detail Student");
};

export const createStudentController = async (req, res) => {
  let { password, name } = req.body;
  if (password && name) {
    const response = await createStudentServices(password, name);
    return res.status(200).json(response);
  } else {
    return res.status(500).json({
      status: "err",
      message: "password and name is required",
    });
  }
};
