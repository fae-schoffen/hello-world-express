"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/itens', require("./src/routers/itens"))

const port = process.env.PORT || 8090;

app.get("/imalive", function (req, res) {
    res.json({ "status": "OK" });
});

const server = app.listen(port, function () {
    console.log("Listening on port %s...", server.address().port);
});

module.exports = server;