import { IOrders } from '../interfaces';
import connection from './connection';

export async function getAllOrders(): Promise<IOrders[]> {
  const [orders] = await connection.execute(
    `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON p.orderId = o.id
    GROUP BY o.id
    ORDER BY o.userId`,
  );
  return orders as IOrders[];
}

export default getAllOrders;