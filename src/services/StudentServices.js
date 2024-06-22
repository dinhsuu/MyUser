import bcrypt from 'bcrypt';
import db from '../models';
import jwt from 'jsonwebtoken';
import Configs from '../utils/Configs';

export const createStudentServices = (email, name, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPassword = bcrypt.hashSync(password, 10);
      const response = await db.Student.findOrCreate({
        where: { email: email },
        default: {
          email,
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

export const loginStudentServices = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Student.findOrCreate({
        where: { email: email },
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
