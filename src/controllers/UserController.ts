import { compareSync } from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { User } from '../entity/User';

const SECRET_KEY = process.env.SECRET_KEY;

async function register(req: Request, res: Response): Promise<Response> {
  const inputs = req.body;

  try {
    const user = User.create({ ...inputs });

    await User.save(user);

    return res.status(201).json(user);
  } catch (error) {
    if (error.constraint) {
      return res
        .status(422)
        .json({ message: error.message, detail: error.detail });
    }
    return res.status(500).json(error);
  }
}

async function login(req: Request, res: Response): Promise<Response> {
  const inputs = req.body;

  try {
    let user = await User.findOne({ where: { username: inputs.username } });
    const checkPassword = compareSync(inputs.password, user.password);

    if (!checkPassword || !user) {
      return res.status(400).json({ msg: 'Wrong Username / Password' });
    }

    delete user.password;

    const { ...payload } = user;

    const token = jwt.sign({ payload }, SECRET_KEY);
    return res.json({ token });
  } catch (error) {
    return res.status(500).json(error);
  }
}

export { register, login };
