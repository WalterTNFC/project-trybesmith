import { ResultSetHeader } from 'mysql2';
import { IUserBody } from '../interfaces';
import connection from './connection';

export async function createUser(user: IUserBody): Promise<void> {
  const { username, classe, level, password } = user;

  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
    [username, classe, level, password],
  );
}

export default createUser;