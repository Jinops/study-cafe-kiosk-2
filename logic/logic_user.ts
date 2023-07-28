import { QueryTypes } from 'sequelize';
import { sequelize } from '../models';

export async function register(req: any){
  const phone: String = req.body.phone;
  const password: Number = req.body.password;
  const name: String = req.body.name;

  const query = `INSERT INTO USER(Phone, Password, Name) VALUES('${phone}','${password}','${name}')`;
  const results = await sequelize.query(query, { type: QueryTypes.INSERT });

  // TODO: check duplicated phone number
  return {
    result: results,
  };
}
