import { QueryTypes } from 'sequelize';
import { sequelize } from '../models';
import { api_error } from '../common/api_error';

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
    req.session.destroy();
  }
  const query = `SELECT Phone FROM USER WHERE Phone=${phone} AND Password=${password} LIMIT 1`;
  const result = await sequelize.query(query, { type: QueryTypes.SELECT });
  
  if(result.length < 1){
    return {
      error: api_error.INVALID_REQUEST,
      phone: null,
    };
  }
  req.session.phone = phone;
  return {
    error: api_error.OK,
    phone: phone,
  };
}
