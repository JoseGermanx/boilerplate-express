require('dotenv').config()
require('body-parser');
const bodyParser = require('body-parser');
let express = require("express");
let app = express();

const pathUrl = __dirname + '/views/index.html';
const pathPublic = __dirname + '/public';

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });
app.use(bodyParser.urlencoded({extended: false}));
app.use("/public",express.static(pathPublic));
app.use(function middleware(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
})
app.get("/", (req, res)  => {
res.sendFile(pathUrl)
});
app.get("/json", (req, res) => {
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({ message: "HELLO JSON" });
    } else {
    res.json({ message: "Hello json" });
    }
});
app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({time: req.time});
});
app.get("/:word/echo", (req, res) => {
    res.json({echo: req.params.word});
});
app.route("/name").get((req, res) => {
    res.json({name: req.query.first + " " + req.query.last});
}).post((req, res) => {
    res.json({name: req.body.first + " " + req.body.last});
});

module.exports = app;
