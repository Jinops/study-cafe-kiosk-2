import express, { Request, Response } from 'express';
import { sequelize } from "./models";
import dotenv from 'dotenv';
import * as notice from './logic/notice';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const webDir = __dirname + '/public/';

// middle 
app.use(express.static('public'));

// route
app.get('/test', (req: Request, res: Response) => {
  res.send('Hello, World! This is your Node.js server.');
});

app.get('/', (req: Request, res: Response) => {
  res.sendFile(webDir + 'index.html')
});

app.get('/notice', async (req: Request, res: Response) => {
  const result = await notice.get(req);
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
