const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();

const port = 4000

app.use(cookieParser())

//var path = require("path")
var ejs = require("ejs")


app.listen(port, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + port)
    else
        console.log("Error occurred, server can't start", error);
}
);

//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use(express.static(__dirname + '/public'));

var cookieRouter = require('./routes/cookieroutes');

app.use('/', cookieRouter);
