const express = require("express");
const bodyParserMiddleware = require("./middleware/bodyParser");
const initAPIRoute = require("./route/tasks");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error");
const listeningPort = require("./configs/listeningPort");

const app = express();

bodyParserMiddleware(app);

//routes
initAPIRoute(app);
notFoundMiddleware(app);
errorHandlerMiddleware(app);
listeningPort(app);
