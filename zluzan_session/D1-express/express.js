// 1. Create and setup Express Server
const express = require('express');
const app = express();

const path = require('path');  // file sending need path
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Port
const port = 333;
app.listen(port, (error) => {
    if (!(error)) {
        console.log("Application is Running on : " + port);
    } else
        console.log("Application Can't run on : " + port);
})

// Route  - Get - localhost:3333
app.get('/', function (req, res, next) {
    res.send("Hello there to home Page");
})

// 2. Show the Html developed in DOM Assignment when path is '/add'
app.get('/adding', function (req, res, next) {
    res.sendFile(path.join(__dirname, "./", "views", "form.html"));
})

// 3. Submit the data entered by the User to the same url.

// a. Store all the User entered information locally(in the server page)
//send html data

let data = {};

//b. Redirect the Post to new route, '/view' page.

app.post('/adding', function (req, res, next) {
    console.log(req.body);  //json ,,, data passing from form and post method
    data = req.body;
    //console.log(data);
    res.redirect('/viewing');  //not req
})

// 4. View request should construct the html from the information stored by User and display the page.

app.get('/viewing', function (req, res, next) {
    let html = " ";

    html += CreateSpan("Name : ", data.name);
    html += CreateSpan("Degree : ", data.degree);
    html += CreateSpan("Course : ", data.course);
    html += CreateSpan("Option : ", data.optionlist);
    html += CreateSpan("Message : ", data.txtArea);

    res.send(html);
})

function CreateSpan(label, data) {
    return "<span>" + label + " " + data + "</span></br>"
}

// 5. Create an Error Page
app.get("/error", function (req, res, next) {
    res.send(error());
})

// 5. Create 404 page, so whenever User types in the path that is not found, this 404 is shown.
//300 //400 //500
app.use(function (req, res, next) {
    // status
    res.status(404);
    res.sendFile(path.join(__dirname, "./", "views", '404.html'));
})

app.use(function (error, req, res, next) {
    // status
    res.status(500);
    res.sendFile(path.join(__dirname, "./", "views", 'error.html'));
})

// // 6. Add a link to the DOM html to see the statistics of the site, (this is a separate get request), this page shows the number of hits per url.

// let home = 0;
// let add = 0;
// let view = 0;