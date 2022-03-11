import express from 'express';
import dotenv from 'dotenv/config';

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`Server available on the port ${PORT}`),
);