import { User } from "../model/userModel.js";
export const userController = (req, res) => {
  res.send("Hello use 123456");
};

export const userDetailController = (req, res) => {
  // console.log("Detail User 123");
};

export const createUserController = async (req, res) => {
  console.log("req.body", req.body);
  const { email, password, name } = req.body;
  try {
    if (email && password && name) {
      const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
      if (isEmail) {
        const newUser = await User.create({ email, password, name });
        console.log("newUser", newUser);
        return res.json({
          status: "OK",
          data: newUser,
        });
      }
    } else {
      return res.json({
        status: "err",
        message: "the email, password and name is required",
      });
    }
  } catch (err) {
    console.log("ERROR", err);
    return res.json({
      status: "err",
      message: err,
    });
  }
};
