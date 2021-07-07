import express from "express";
import dotenv from 'dotenv';

//components
import connection from './database/db.js'
import defaultData from './default.js'

dotenv.config()
const app = express();

const PORT = 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username, password)

app.listen(PORT, () =>
  console.log(`server is successfully running on PORT ${PORT}`)
);

//default data to database
defaultData();