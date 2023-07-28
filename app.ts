import express, { Request, Response } from 'express';
import { sequelize } from "./models";
import dotenv from 'dotenv';
import * as logic_notice from './logic/logic_notice';
import * as logic_user from './logic/logic_user';
import bodyParser from 'body-parser';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const webDir = __dirname + '/public/';

// middle 
app.use(express.static('public'));
app.use(bodyParser.json());

// route
app.get('/test', (req: Request, res: Response) => {
  res.send('Hello, World! This is your Node.js server.');
});

app.get('/', (req: Request, res: Response) => {
  res.sendFile(webDir + 'index.html')
});

app.get('/notice', async (req: Request, res: Response) => {
  const result = await logic_notice.get(req);
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
