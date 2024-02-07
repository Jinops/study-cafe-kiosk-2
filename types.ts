import { SessionData } from "express-session";

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

export interface ISession extends SessionData {
  phone?: string;
  ticket_type?: ticket_type;
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
