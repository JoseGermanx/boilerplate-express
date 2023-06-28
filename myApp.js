let express = require("express");
let app = express();

const pathUrl = __dirname + '/views/index.html';

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

app.get("/", (req, res)  => {
res.sendFile(pathUrl)
})
module.exports = app;
