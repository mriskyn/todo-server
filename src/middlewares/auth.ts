import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

function authorization(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ msg: 'Unauthorized Request' });
  }
  req.user = jwt.decode(token);
  next();
}

export { authorization };
