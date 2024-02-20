import * as logic_ticket from '../logic/logic_ticket';
import * as logic_payment from '../logic/logic_payment';
import * as logic_reserve from '../logic/logic_reserve';
import * as logic_user from '../logic/logic_user';
import { api_error } from '../common/api_error';
import { ISession } from '../types';

export async function add(session:ISession){
  console.log(JSON.stringify(session));
  if(!session.user_id || !session.ticket_id || !session.seat_id || !session.room_id || !session.payment_type){
    return { error: api_error.INVALID_REQUEST,}
  }

  console.log(1)
  const ticket = await logic_ticket.get(session.ticket_id || null);
  if(!ticket){
    return { error: api_error.INVALID_REQUEST,}
  }
  const date = new Date();

  console.log(2)
  const payment = await logic_payment.add(session.user_id, session.ticket_id, session.payment_type, ticket.Price, date);
  if(!payment){
    return { error: api_error.INVALID_REQUEST,}
  }

  console.log(3)
  const reserve = await logic_reserve.add(session.user_id, session.room_id, session.seat_id, session.ticket_id, ticket.Duration_min, date);
  if(!reserve){
    return { error: api_error.INVALID_REQUEST,}
  }

  console.log(4)
  await logic_user.updateTotalPayment(session.user_id, ticket.Price); // TODO: error check

  return {
    api_error: api_error.OK,
  }
}
