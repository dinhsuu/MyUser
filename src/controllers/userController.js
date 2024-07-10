// const User = require('../models/UserModel');
import bcrypt from 'bcrypt';
import con from '../../config/db.config';
import User from '../models/UserModel';

export const getUser = async (req, res) => {
  con.query('SELECT * FROM Users', function (err, result) {
    if (err) res.send(err);
    return res.json({
      status: 200,
      message: 'Success',
      data: result
    });
  });

  // User.getAll(function (err, user) {
  //   if (err) res.send(err);
  //   return res.json({
  //     status: 200,
  //     message: 'Success',
  //     data: user
  //   });
  // });
};

export const createUserController = (req, res) => {
  const { name, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  const data = { name, password: hashPassword };

  con.query(`SELECT * FROM Users WHERE name ='${name}'`, (e, resultat) => {
    if (e) throw e;
    if (resultat[0] === undefined) {
      const sql = 'INSERT INTO Users SET ?';
      // con.query(sql, data);
      // con.end();
      //   const sql = `INSET INTO Users VALUES('', ${name}, ${password})`;
      con.query(sql, data, function (err, result) {
        if (err) {
          return res.json({
            status: 'err',
            message: 'Internal server error'
          });
        }
        return res.status(200).json({
          message: 'Cteate is success'
        });
      });
    } else {
      return res.json({
        status: 'err',
        message: 'User already exists'
      });
    }
  });
};

export const login = (req, res) => {
  const { name, password } = req.body;
  const sql = 'SELECT * FROM Users WHERE name = ?';
  con.query(sql, name, function (err, result) {
    if (err) {
      return res.json({
        status: 'err',
        message: 'Internal server error'
      });
    }
    let user = result[0];
    let pass_fromdb = user.password;
    const icCheckPassword = bcrypt.compareSync(password, pass_fromdb);
    if (icCheckPassword) {
      return res.status(200).json({ message: 'Login is success' });
    } else {
      return res.json({
        status: 'err',
        message: 'Name or password not registered!'
      });
    }
  });
};

export const getUserById = async (req, res) => {
  const { id } = req.query;
  con.query('select * from Users where id =?', id, function (err, result) {
    if (err) {
      return res.json({
        status: 'err',
        message: 'Internal server error'
      });
    }
    const { password, ...data } = result[0];
    data.password = undefined;
    return res.status(200).json({
      message: data ? 'Get user success' : 'User is not found',
      data
    });
  });
};
