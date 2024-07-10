import express from 'express';
import { createUserController, getUser, getUserById, login } from '../controllers/UserController.js';

const route = express.Router();

route.get('/get-user', getUser);
route.post('/create', createUserController);
route.post('/login', login);
route.get('/get-user-byId', getUserById);


export default route;
