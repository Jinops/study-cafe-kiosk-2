import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

const webDir = __dirname + '/public/';
app.use(express.static('public'));

app.get('/test', (req: Request, res: Response) => {
  res.send('Hello, World! This is your Node.js server.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req: Request, res: Response) => {
  res.sendFile(webDir + 'index.html')
});
