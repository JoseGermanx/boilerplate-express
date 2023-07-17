let express = require("express");
let app = express();

const pathUrl = __dirname + '/views/index.html';
const pathPublic = __dirname + '/public';

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

app.use(express.static(pathPublic));

app.get("/", (req, res)  => {
res.sendFile(pathUrl)
})
module.exports = app;
