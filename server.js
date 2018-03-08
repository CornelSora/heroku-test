var express = require("express");

var app = express();

app.get("/", (req, res) => {
	res.status(200).send("Test");
});

app.listen(8000);