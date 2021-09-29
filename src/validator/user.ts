import { body } from 'express-validator';

function checkRegister() {
  return [
    body('firstName').isLength({ min: 1 }).withMessage('First Name is empty'),
    body('lastName').isLength({ min: 1 }).withMessage('Last Name is empty'),
    body('email').isEmail().withMessage('Email is incorrect'),
    body('username')
      .isLength({ min: 4 })
      .withMessage('Username must have at least 6 character')
      .isLowercase()
      .withMessage('Username only use lower case'),
    body('password')
      .isStrongPassword({
        minLength: 6,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .withMessage(
        'Password must contain upper case, number, symbol, and with minimum 6 length'
      ),
  ];
}

export { checkRegister };
