import 'dotenv/config';
import express from 'express';
import { handler } from './client/build/handler.js';

const app = express();

app.get('/hello', (req, res) => {
  res.end('Oh, Hi!');
});

app.use(handler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
