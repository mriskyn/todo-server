import { NextFunction, Request, Response } from 'express';

function authorization(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;
  console.log({ token }, req.path);
  if(!token){
    res.status(401).json({msg: 'Unauthorized Request'})
  }
  next();
}

export { authorization };
