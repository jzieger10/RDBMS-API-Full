const express = require("express");
const middleware = require("./config/middleware.js");

const studentsRouter = require("./Routers/studentsRouter.js");
const cohortsRouter = require("./Routers/cohortsRouter.js");

const server = express();

middleware(server);

server.use("/students", studentsRouter);
server.use("/api/cohorts", cohortsRouter);

module.exports = server;
