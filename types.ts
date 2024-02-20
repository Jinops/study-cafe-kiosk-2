export interface INotice {
  Id?: number;
  Title: string;
  Content: string;
}

export interface IUser {
  Id?: number;
  Phone: string;
  Password: string;
  Name: string;
  Total_payment?: number;
}

export interface ISession  {
  user_id?: number;
  ticket_type?: ticket_type;
  ticket_id?: number;
  seat_id?: number;
  room_id?: number;
  payment_type?: payment_type;
}

declare module "express-session" {
  interface SessionData extends ISession {}
}

export interface ITicket {
  Id: number;
  Type: ticket_type;
  Price: number;
  Duration_min: number;
}

export type ticket_type = 'baisc' | 'fixed';

export interface ISeat {
  Id: number;
  Room_id: number;
  Width: number;
  Height: number;
  X: number;
  Y: number;
}

export interface IRoom {
  Id: number;
  Name: string;
  Width: number;
  Height: number;
}

export interface IReserve {
  Id: number;
  User_id: number;
  Room_id: number;
  Seat_id: number;
  Ticket_id: number;
  Start_time: Date;
  End_time: Date;
}

export type payment_type = 'card' | 'cash';

export interface IPayment {
  Id?: number;
  User_id: number;
  Ticket_id: number;
  Price: number;
  Time: Date;
  Type: payment_type;
}
