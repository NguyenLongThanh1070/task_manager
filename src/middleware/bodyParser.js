const express = require("express");

const bodyParserMiddleware = (app) => {
    app.use(express.json());
};

module.exports = bodyParserMiddleware;
