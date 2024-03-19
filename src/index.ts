import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import binarySearch from "./algorithms/binarySearch";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

binarySearch();

app.listen(port);
