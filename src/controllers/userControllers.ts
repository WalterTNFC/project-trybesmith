import { Request, Response } from 'express';
import { IUserBody } from '../interfaces';
import * as userServices from '../service/userService';

export async function createUser(req: Request<unknown, unknown, IUserBody>, res: Response) {
  const { username, classe, level, password } = req.body;
  const { code, token, error } = await userServices.createUser({
    username, classe, level, password,
  });

  return error
    ? res.status(code).json({ error })
    : res.status(code).json({ token });
}

export default createUser;