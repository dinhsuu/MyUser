import express from 'express';
import { createStudentController, getStudentByIdController, getStudentsController, loginStudentController } from '../controllers/StudentController';
import verifyToken from '../migrations/verify-token';
const router = express.Router();

router.post('/login', loginStudentController);
router.post('/create', createStudentController);

router.use('/', verifyToken);

// router.get('/', studentController);
// router.get('/detail', studentDetailController);

router.get('/get-list', getStudentsController);
router.get('/', getStudentByIdController);

export default router;
