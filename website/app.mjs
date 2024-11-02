import { rmSync } from "fs";
import fs from "fs";
import { createServer } from "http";
import express from "express";
import multer from "multer";
import path from "path";
import Datastore from "nedb";
import session from "express-session";
import { parse, serialize } from "cookie";
import { genSalt, hash, compare } from "bcrypt";


const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.static("static"));

app.use(function (req, res, next) {
    console.log("HTTP request", req.method, req.url, req.body);
    next();
});

export const server = createServer(app).listen(PORT, function (err) {
    if (err) console.log(err);
    else console.log("HTTP server on http://localhost:%s", PORT);
});