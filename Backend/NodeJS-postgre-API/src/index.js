import express from 'express';
import { PORT } from './config.js';
import userRoutes from './routes/users.routes.js'
import morgan from "morgan";

const app = express();

//hola
app.use(morgan('dev'));
app.use(express.json());
app.use(userRoutes);

app.listen(3000);

console.log("hola", process.env.DB_PORT);