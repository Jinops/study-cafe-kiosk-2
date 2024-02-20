import { QueryTypes } from 'sequelize';
import { sequelize } from '../models';
import { api_error } from '../common/api_error';
import { IUser } from '../types';

export async function register(req: any){
  const phone: String = req.body.phone;
  const password: Number = req.body.password;
  const name: String = req.body.name;

  const query = `INSERT INTO USER(Phone, Password, Name) VALUES('${phone}','${password}','${name}')`;
  const results = await sequelize.query(query, { type: QueryTypes.INSERT });

  // TODO: check duplicated phone number
  return {
    error: api_error.OK,
    result: results,
  };
}
export async function login(req: any){
  const phone: String = req.body.phone;
  const password: String = req.body.password;

  if(req.session.phone){
    req.session.phone=null;
  }
  const query = `SELECT Id FROM USER WHERE Phone=${phone} AND Password=${password} LIMIT 1`;
  const result:Pick<IUser, 'Id'>|null = await sequelize.query(query, { type: QueryTypes.SELECT, plain:true });
  
  if(!result){
    return {
      error: api_error.INVALID_REQUEST,
    };
  }

  req.session.user_id = result.Id;
  return {
    error: api_error.OK,
  };
}

export async function logout(req: any){
  req.session.destroy(()=>req.session);
  return {
    error: api_error.OK,
  }
}


async function get(userId: number) : Promise<IUser | null>{
  const query = `SELECT * FROM USER WHERE Id=${userId} LIMIT 1`;
  return await sequelize.query(query, { type: QueryTypes.SELECT, plain:true });
}

export async function updateTotalPayment(userId: number, price:number){
  const user = await get(userId);
  if(!user) return;

  const query = `UPDATE USER SET Total_payment=Total_payment+${price} WHERE Id=${userId};`;
  const result = await sequelize.query(query, {type: QueryTypes.UPDATE});

  return result;
}

