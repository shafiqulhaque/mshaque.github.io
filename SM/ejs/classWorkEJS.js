//express server
const express = require('express');
const ejs = require('ejs');

const app = express();
var path = require("path");
const { ppid } = require('process');

app.listen(5000, () => {
    console.log('Your Server is running on 5000');
})

//red the parameter from the post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
//app.set('views', path.join(__dirname, 'templates'));

app.get("/admin", function (req, res, next) {
    console.log('Admin Landing');
    //res.render("index2", { list: ["apple", "banana"] });
    res.render(path.join(__dirname, "views", "index2"), { list: ["apple", "banana"] });
});