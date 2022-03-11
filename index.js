import express from 'express';
import dotenv from 'dotenv/config';
import mongoose from 'mongoose';

import { router as routeRegistration } from './routes/registration.js';

const app = express();
app.use(express.json())

const MONGODB_URL = process.env.MONGODB_URL;
//Connection DB 
app.use(routeRegistration)
mongoose.connect(`mongodb://${MONGODB_URL}/rawg`, () =>
    console.log('Connected to DB' + MONGODB_URL));
    
const PORT = process.env.PORT;
//Listening to the server
app.listen(PORT, () =>
    console.log(`Server running on the port ${PORT}`),
);