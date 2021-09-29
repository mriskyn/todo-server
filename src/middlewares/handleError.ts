import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

function handleValidationError(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  next();
}

export { handleValidationError };
