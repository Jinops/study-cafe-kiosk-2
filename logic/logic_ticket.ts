import { QueryTypes } from 'sequelize';
import { sequelize } from '../models';
import { api_error } from "../common/api_error";
import { ITicket, ticket_type } from "../types";

export async function set_type(req: any){
  const ticket_type: ticket_type = req.body.ticket_type;
  req.session.ticket_type = ticket_type;
  return {
    error: api_error.OK,
  };
}

export async function set_id(req: any){
  const id: number = req.body.ticket_id;
  req.session.ticket_id = id;
  return {
    error: api_error.OK,
  };
}

export async function get_all_by_type(req: any){
  const ticket_type: ticket_type = req.session.ticket_type;
  
  const query = `SELECT * FROM TICKET WHERE Type='${ticket_type}'`;
  const results:ITicket[] = await sequelize.query(query, { type: QueryTypes.SELECT });

  return {
    error: api_error.OK,
    tickets: results,
  };
}

export async function get(ticket_id: number|null) : Promise<Pick<ITicket, "Price" | "Duration_min"> | null> {
  const query = `SELECT Price, Duration_min FROM TICKET WHERE Id=${ticket_id};`;
  
  return await sequelize.query(query, { type: QueryTypes.SELECT, plain:true });
}
