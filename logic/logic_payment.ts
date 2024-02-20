import { QueryTypes } from "sequelize";
import { api_error } from "../common/api_error";
import { sequelize } from "../models";
import { payment_type } from "../types";
import { dateToString } from "../common/util";

export async function set_type(req: any){
    const payment_type:payment_type = req.body.payment_type;
    req.session.payment_type = payment_type;
    return {
      error: api_error.OK,
    };
}

export async function add(userId:number, ticketId:number, paymentType:payment_type, price:number, date: Date){
  // INSERT INTO P_PAYMENT 
  const query = `INSERT INTO PAYMENT (User_id, Ticket_id, Price, Time, Type) VALUES(${userId}, ${ticketId}, ${price}, "${dateToString(date)}", "${paymentType}")`;
  const result = await sequelize.query(query, { type: QueryTypes.INSERT });
  // const 
  
  return {
    error:api_error.OK,
    result,
  }
}
