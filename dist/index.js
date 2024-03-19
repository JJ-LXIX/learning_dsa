"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const binarySearch_1 = __importDefault(require("./algorithms/binarySearch/binarySearch"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const arr = [1, 3, 5, 6, 7, 8, 9, 13, 14, 15];
console.log((0, binarySearch_1.default)(arr, 2));
app.listen(port);
