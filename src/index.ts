import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import binarySearch from "./algorithms/binarySearch/binarySearch";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const arr = [1, 3, 5, 6, 7, 8, 9, 13, 14, 15];

console.log(binarySearch(arr, 3));

app.listen(port);
