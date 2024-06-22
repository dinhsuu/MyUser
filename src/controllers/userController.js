import { createUserServices } from "../services/UserServices.js";

export const userController = (req, res) => {
  res.send("Hello use 123456");
};

export const userDetailController = (req, res) => {
  // console.log("Detail User 123");
};

export const createUserController = async (req, res) => {
  let { password, name } = req.body;
  if (password && name) {
    const response = await createUserServices(password, name);
    return res.status(200).json(response);
  } else {
    return res.status(500).json({
      status: "err",
      message: "password and name is required",
    });
  }
};
