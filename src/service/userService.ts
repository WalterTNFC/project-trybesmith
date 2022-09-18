import jwt from 'jsonwebtoken';
import { StatusCode, IUserBody, INewUser } from '../interfaces';
import * as userModel from '../models/userModel';

const JWT_SECRET = 'secret';

export async function createUser(user: IUserBody): Promise<INewUser> {
  await userModel.createUser(user);
  const token: string = jwt.sign(user, JWT_SECRET);
  return { code: StatusCode.CREATED, token };
}

export default createUser;
