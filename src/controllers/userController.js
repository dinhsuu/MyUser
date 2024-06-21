import { createUserServices } from "../services/UserServices.js";

export const userController = (req, res) => {
  res.send("Hello use 123456");
};

export const userDetailController = (req, res) => {
  // console.log("Detail User 123");
};

export const createUserController = async (req, res) => {
  console.log("req.body", req.body);
  let { email, password, name } = req.body;
  if (email && password && name) {
    const response = await createUserServices(email, password, name);
    return res.json(response);
  } else {
    return res.json({
      status: "err",
      message: "the email, password and name is required",
    });
  }
};
