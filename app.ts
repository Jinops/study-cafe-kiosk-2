import express, { Request, Response } from 'express';
import { sequelize } from "./models";
import dotenv from 'dotenv';
import * as logic_notice from './logic/logic_notice';
import * as logic_user from './logic/logic_user';
import bodyParser from 'body-parser';
import session from 'express-session';
import path from 'path';
import { ISession } from './types';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, 'public');
// middle 
app.use(express.static(publicDir, { index: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
  })
);
// route
app.get('/', (req: Request, res: Response) => {
  const session:ISession = req.session;
  if(session.phone){
    res.sendFile(path.join(publicDir, 'ticket.html'));
  } else{
    res.sendFile(path.join(publicDir, 'index.html'));
  }
});

app.get('/notice', async (req: Request, res: Response) => {
  const result = await logic_notice.get(req);
  res.send(result);
});
app.post('/user/login', async (req: Request, res: Response) => {
  console.log(req)
  const result = await logic_user.login(req);
  res.send(result);
});
app.post('/user/register', async (req: Request, res: Response) => {
  const result = await logic_user.register(req);
  res.send(result);
});

// start
app.listen(PORT, async () => {
  console.log(`Server Listening on ${PORT}`);

   await sequelize.authenticate()
   .then(async () => {
       console.log("DB connection success");
   })
   .catch((e) => {
       console.error("DB connection fail\n", e);
   })
})
