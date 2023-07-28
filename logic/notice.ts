import { QueryTypes } from 'sequelize';
import { sequelize } from '../models';
import { INotice } from '../types';

export async function get(req:any): Promise<INotice>{
    const query = `SELECT * FROM NOTICE;`; 
    const results:INotice[] = await sequelize.query(query, { type: QueryTypes.SELECT });

    return results[0] || {};
}
