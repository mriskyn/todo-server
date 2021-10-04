import express from 'express';
import {
  createTask,
  deleteTask,
  readTasks,
  updateTask,
  readTask,
} from '../controllers/TaskController';
import { login, register } from '../controllers/UserController';
import { authorization } from '../middlewares/auth';
import { handleValidationError } from '../middlewares/handleError';
import { checkLogin, checkRegister } from '../validator/user';

const router = express.Router();

router.post('/register', checkRegister(), handleValidationError, register);
router.post('/login', checkLogin(), handleValidationError, login);

router.use(authorization);
router.post('/task', createTask);
router.get('/task', readTasks);
router.get('/task/:id', readTask);
router.patch('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);

export default router;
