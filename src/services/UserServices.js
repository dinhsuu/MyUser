import bcrypt from "bcrypt";
import db from "../models";

export const createUserServices = (password, name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPassword = bcrypt.hashSync(password, 10);
      const response = await db.User.findOrCreate({
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

// export const createUserServices2 = (email, password, name) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
//       if (isEmail) {
//         const isCheckEmail = User.find({ email: email });
//         const isCheckName = User.find({ name: name });
//         if (isCheckEmail.length || isCheckName.length) {
//           resolve({
//             status: "ERROR",
//             data: "The name or user name is existed",
//           });
//         }
//         const hashPassword = bcrypt.hashSync(password, 10);
//         const newUser = await User.create({
//           email,
//           password: hashPassword,
//           name,
//         });
//         resolve({
//           status: "OK",
//           data: { email: newUser.email, name: newUser.name },
//         });
//       } else {
//         resolve({
//           status: "OK",
//           data: "user name is not off email",
//         });
//       }
//     } catch (err) {
//       console.log("ERROR", err);
//       reject({ status: "err", message: err });
//     }
//   });
// };
