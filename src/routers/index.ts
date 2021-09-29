import express from 'express';
import { checkSchema } from 'express-validator';
import { login, register } from '../controllers/UserController';
import { handleValidationError } from '../middlewares/handleError';
import { checkLogin, checkRegister } from '../validator/user';

const router = express.Router();

router.post('/register', checkRegister(), handleValidationError, register);
router.post('/login', checkLogin(), handleValidationError, login);

export default router;
