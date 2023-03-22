var express = require("express");
var app = express();app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/android-version", (req, res, next) => {
    res.json({version: "1.0"});
});

app.get("/ios-version", (req, res, next) => {
    res.json({version: "1.0"});
});