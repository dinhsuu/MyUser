import {
  createUserServices,
  loginUserServices,
} from "../services/UserServices.js";

export const userController = (req, res) => {
  res.send("Hello use 123456");
};

export const userDetailController = (req, res) => {
  // console.log("Detail User 123");
};

export const createUserController = async (req, res) => {
  try {
    let { password, name } = req.body;
    if (!password || !name) {
      return res.status(400).json({
        status: "err",
        message: "Name and password is required",
      });
    }
    const response = await createUserServices(name, password);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({
      status: "err",
      message: "Internal server error",
    });
  }
};

export const loginUserController = async (req, res) => {
  try {
    let { password, name } = req.body;
    if (!password || !name) {
      return res.status(400).json({
        status: "err",
        message: "Name and password is required",
      });
    }
    const response = await loginUserServices(name, password);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({
      status: "err",
      message: "Internal server error",
    });
  }
};
