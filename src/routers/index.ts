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
import { checkLogin, checkRegister, checkTask } from '../validator/user';

const router = express.Router();

router.post('/register', checkRegister(), handleValidationError, register);
router.post('/login', checkLogin(), handleValidationError, login);

router.get('/task', readTasks);
router.use(authorization);
router.post('/task', checkTask(), handleValidationError, createTask);
router.get('/task/:id', readTask);
router.patch('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);

export default router;
