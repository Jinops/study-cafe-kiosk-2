import { QueryTypes } from 'sequelize';
import { sequelize } from '../models';

export async function get(req:any){
    const query = `SELECT * FROM NOTICE;`; 
    const result = await sequelize.query(query, { type: QueryTypes.SELECT });
    return result;
}
