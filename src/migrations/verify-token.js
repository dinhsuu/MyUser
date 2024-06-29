import jwt from 'jsonwebtoken';
import Configs from '../utils/Configs';

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.json({
      status: 'err',
      message: 'Required authorization'
    });
  }

  const accessToken = token.split(' ')[1];
  jwt.verify(accessToken, Configs.key.jwtPrivateKey, (err, student) => {
    if (err) {
      return res.json({
        status: 'err',
        message: 'accessToken expired or invalid'
      });
    }
    req.student = student;
    next();
  });
};

export default verifyToken
