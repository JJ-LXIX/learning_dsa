import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import binarySearch from "./algorithms/binarySearch/binarySearch";
import selectionSort from "./algorithms/SelectionSort/SelectionSort";
import {
  sumRecursion,
  arrayCount,
} from "./algorithms/recursion/problemsRecursion";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const arr = [1, 3, 5, 6, 7, 8, 9, 13, 14, 14];
// const arr = [7, 1, 5, 3, 14, 6, 15, 13, 8, 9];

console.log(sumRecursion(arr));

app.listen(port);
