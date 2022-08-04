const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use("/css", express.static(__dirname + "/css"));
app.use("/images", express.static(__dirname + "/images"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, function() {
    console.log("Server running on port 3000");
});
