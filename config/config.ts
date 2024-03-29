import dotenv from 'dotenv';
dotenv.config();

export const config = {
  development : {
    username : process.env.DB_USERNAME!,
    password : process.env.DB_PASSWORD!,
    database : process.env.DB_SCHEMA!,
    host : process.env.DB_HOST!,
    port : process.env.DB_PORT!,
    dialect : "mysql"
  }
};
