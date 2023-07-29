const express = require("express");
const app = express();
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(cors());
dotenv.config();
app.listen(process.env.PORT || 3000, function (err) {
    if (err) throw err;
    console.log("App Started");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all("/register", function (req, res) {
    try {
        res.json(req.body);
    } catch (err) {
        res.json({ error: "Something Went Wrong!" });
    }
});
