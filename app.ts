import express, { Request, Response } from 'express';
import { sequelize } from "./models";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import session from 'express-session';
import path from 'path';
import * as logic_notice from './logic/logic_notice';
import * as logic_user from './logic/logic_user';
import * as logic_ticket from './logic/logic_ticket';
import * as logic_room from './logic/logic_room';
import * as logic_seat from './logic/logic_seat';
import * as logic_payment from './logic/logic_payment';
import * as route_payment from './route/route_payment';
import * as route_user from './route/route_user';

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
  console.log(req.session.user_id)
  if(req.session?.user_id){
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
  const result = await route_user.login(req);
  res.send(result);
});
app.post('/user/logout', async (req: Request, res: Response) => {
  const result = await route_user.logout(req);
  res.send(result);
});
app.post('/user/register', async (req: Request, res: Response) => {
  const result = await route_user.register(req);
  res.send(result);
});

app.post('/ticket/set_type', async (req: Request, res: Response) => {
  const result = await logic_ticket.set_type(req);
  res.send(result);
});
app.post('/ticket/set_id', async (req: Request, res: Response) => {
  const result = await logic_ticket.set_id(req);
  res.send(result);
});
app.get('/ticket/all_by_type', async (req: Request, res: Response) => {
  const result = await logic_ticket.get_all_by_type(req);
  res.send(result);
});

app.get('/room/all', async (req: Request, res:Response) => {
  const result = await logic_room.get_all();
  res.send(result);
})

app.get('/seat/by_room_id/:room_id', async (req: Request, res:Response) => {
  const result = await logic_seat.get_all_by_room_id(req);
  res.send(result);
})
app.post('/seat/set', async (req: Request, res:Response) => {
  const result = await logic_seat.set(req);
  res.send(result);
})

app.post('/payment/set_type', async (req: Request, res:Response) => {
  const result = await logic_payment.set_type(req);
  res.send(result);
})

app.get('/payment/add', async (req: Request, res:Response) => {
  const result = await route_payment.add(req.session);
  res.send(result);
})

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
