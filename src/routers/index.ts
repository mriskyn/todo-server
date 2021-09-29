import express from 'express';
import { checkSchema } from 'express-validator';
import { register } from '../controllers/UserController';
import { handleValidationError } from '../middlewares/handleError';
import { checkRegister } from '../validator/user';

const router = express.Router();

router.post(
  '/register',
  checkRegister(),
  handleValidationError,
  register
);

export default router;
