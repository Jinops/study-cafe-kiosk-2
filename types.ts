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

