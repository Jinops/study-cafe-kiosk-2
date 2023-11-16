import { QueryTypes } from 'sequelize';
import { sequelize } from '../models';
import { api_error } from "../common/api_error";
import { ITicket, ticket_type } from "../types";

export async function set_type(req: any){
  const type: ticket_type = req.body.type;
  req.session.type = type;
  return {
    error: api_error.OK,
  };
}

export async function get_all_by_type(req: any){
  const type: ticket_type = req.session.type;
  
  const query = `SELECT * FROM TICKET WHERE Type='${type}'`;
  const results:ITicket[] = await sequelize.query(query, { type: QueryTypes.SELECT });

  return {
    error: api_error.OK,
    tickets: results,
  };
}