export interface IProductsBody {
  name: string,
  amount: string,
}

export interface IProducts extends IProductsBody {
  id: number,
  userId?: number | null,
}

export enum StatusCode {
  OK = 200,
  CREATED = 201,
  SUCCESS_NO_RESPONSE = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

export interface ProductServiceData {
  code: StatusCode,
  data?: IProducts | IProducts[],
  error?: string,
}

export interface IUserBody {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface INewUser {
  code: StatusCode,
  token?: string,
  error?: string,
}

export interface IOrders {
  id: number,
  userId: number,
  productId: number,
}

export interface IOrdersService {
  code: StatusCode,
  data: IOrders[],
}