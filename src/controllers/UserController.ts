import { compare, compareSync } from 'bcrypt';
import { Request, Response } from 'express';
import { User } from '../entity/User';

async function register(req: Request, res: Response): Promise<Response> {
  const inputs = req.body;

  try {
    const user = User.create({ ...inputs });

    await User.save(user);

    return res.status(201).json(user);
  } catch (error) {
    // if (error.constraint.includes('UQ')) {
    //   return res
    //     .json({
    //       msg: error.detail,
    //     })
    //     .status(400);
    // }
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
    
    return res.json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export { register, login };
