import express from "express";
import dotenv from 'dotenv';

//components
import connection from './database/db.js'

const app = express();

const PORT = 8000;

connection()

app.listen(PORT, () =>
  console.log(`server is successfully running on PORT ${PORT}`)
);
