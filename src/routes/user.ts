import { Router } from 'express';
import { createUser } from '../controllers/userControllers';

const users = Router();

users.post('/', createUser);

export default users;