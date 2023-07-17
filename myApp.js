require('dotenv').config()
let express = require("express");
let app = express();

const pathUrl = __dirname + '/views/index.html';
const pathPublic = __dirname + '/public';

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

app.use("/public",express.static(pathPublic));
app.use(function middleware(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
})
app.get("/", (req, res)  => {
res.sendFile(pathUrl)
})
app.get("/json", (req, res) => {
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({ message: "HELLO JSON" });
    } else {
    res.json({ message: "Hello json" });
    }
});
module.exports = app;
