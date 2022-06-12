const express = require("express");

const app = express();

app.use("/css", express.static(__dirname + "/css"));
app.use("/images", express.static(__dirname + "/images"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function() {
    console.log("Server running on port 3000");
});