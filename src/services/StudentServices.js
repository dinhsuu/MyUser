import bcrypt from "bcrypt";
import db from "../models";

export const createStudentServices = (password, name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPassword = bcrypt.hashSync(password, 10);
      const response = await db.Student.findOrCreate({
        where: { name: name },
        default: {
          name,
          password: hashPassword,
        },
      });

      resolve({
        err: response[1] ? 0 : 1,
        message: response[1] ? "Cteate is success" : "Name is existed",
      });
    } catch (err) {
      console.log("ERROR", err);
      reject({ status: "err", message: err });
    }
  });
};
