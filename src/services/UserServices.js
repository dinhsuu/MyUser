import bcrypt from "bcrypt";
import { User } from "../model/userModel.js";

export const createUserServices = (email, password, name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
      if (isEmail) {
        const isCheckEmail = User.find({ email: email });
        const isCheckName = User.find({ name: name });
        if (isCheckEmail.length || isCheckName.length) {
          resolve({
            status: "ERROR",
            data: "The name or user name is existed",
          });
        }
        const hashPassword = bcrypt.hashSync(password, 10);
        const newUser = await User.create({
          email,
          password: hashPassword,
          name,
        });
        resolve({
          status: "OK",
          data: { email: newUser.email, name: newUser.name },
        });
      } else {
        resolve({
          status: "OK",
          data: "user name is not off email",
        });
      }
    } catch (err) {
      console.log("ERROR", err);
      reject({ status: "err", message: err });
    }
  });
};
