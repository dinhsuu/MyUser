import { createStudentServices, getStudentById, getStudents, loginStudentServices } from '../services/StudentServices';

export const createStudentController = async (req, res) => {
  try {
    let { email, password, name } = req.body;
    if (!email || !name || !password) {
      return res.status(400).json({
        status: 'err',
        message: 'Name and password is required'
      });
    }
    const response = await createStudentServices(email, name, password);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({
      status: 'err',
      message: 'Internal server error'
    });
  }
};

export const loginStudentController = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: 'err',
        message: 'Name and password is required'
      });
    }
    const response = await loginStudentServices(email, password);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({
      status: 'err',
      message: 'Internal server error'
    });
  }
};

export const getStudentsController = async (req, res) => {
  try {
    const response = await getStudents();
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({
      status: 'err',
      message: 'Internal server error'
    });
  }
};

export const getStudentByIdController = async (req, res) => {
  try {
    let { id } = req.query;
    const response = await getStudentById(id);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({
      status: 'err',
      message: 'Internal server error'
    });
  }
};
