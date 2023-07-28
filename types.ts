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
