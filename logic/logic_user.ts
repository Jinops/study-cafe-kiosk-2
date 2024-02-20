import { QueryTypes } from 'sequelize';
import { sequelize } from '../models';
import { api_error } from '../common/api_error';
import { ISession, IUser } from '../types';

export async function register(phone:String, password:Number, name:String){

  const query = `INSERT INTO USER(Phone, Password, Name) VALUES('${phone}','${password}','${name}')`;
  const results = await sequelize.query(query, { type: QueryTypes.INSERT });

  // TODO: check duplicated phone number
}
export async function login(phone:String, password:String, session:ISession){

  // if(session?.user_id){
  //   session.user_id=null;
  // }
  const query = `SELECT Id FROM USER WHERE Phone=${phone} AND Password=${password} LIMIT 1`;
  const result:Pick<IUser, 'Id'>|null = await sequelize.query(query, { type: QueryTypes.SELECT, plain:true });
  
  if(!result){
    return;
  }

  session.user_id = result.Id;
}

export async function logout(session:ISession){
  session.destroy(()=>session);
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

