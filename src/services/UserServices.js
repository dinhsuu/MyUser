import bcrypt from 'bcrypt';
import db from '../models';
import jwt from 'jsonwebtoken';
import Configs from '../utils/Configs';

export const createUserServices = (name, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPassword = bcrypt.hashSync(password, 10);
      const response = await db.User.findOrCreate({
        where: { name },
        defaults: {
          name,
          password: hashPassword
        }
      });
      const token = response[1] ? jwt.sign({ id: response[1].id, name: response[1].name }, Configs.key.jwtPrivateKey, { expiresIn: '5d' }) : null;
      resolve({
        err: response[1] ? 0 : 1,
        message: response[1] ? 'Cteate is success' : 'Name is existed',
        access_token: `Bearer ${token}`
      });
    } catch (err) {
      console.log('ERROR', err);
      reject({ status: 'err', message: err });
    }
  });
};

export const loginUserServices = (name, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { name: name },
        raw: true
      });
      const icCheckPassword = response && bcrypt.compareSync(password, response.password);
      const token = icCheckPassword ? jwt.sign({ id: response.id, name: response.name }, Configs.key.jwtPrivateKey, { expiresIn: '5d' }) : null;

      resolve({
        err: token ? 0 : 1,
        message: token ? 'Login is success' : response ? 'Password is wrong' : 'Email is not registered',
        access_token: token ? `Bearer ${token}` : token
      });
    } catch (err) {
      console.log('ERROR', err);
      reject({ status: 'err', message: err });
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
//         const newUser = await User({
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
