// Madam Last review

var express = require("express");
var app = express();
var ejs = require("ejs");
var path = require("path");
var cookieParser = require("cookie-parser");
//server
app.listen(80, function () {
    console.log("Hosting 80 port");
})
//read the parammeter from post req
app.use(cookieParser);

//middle ware : dont need to us ebody parser ather us this
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//
app.set('view engine', 'html');
app.engine('htnl', ejs.renderFile);

app.get("/", funciton(req, res, next){
    //madams reviewlecture praxtice

});

// Exam: get post redirect sendFile use ejs cookies middleware object-handing json object manipulation
// ajax by button

// render to send parameter
// send file for plain html
// send DataTransfer
//receive Data
// obj send in cokkies
// use ??
// send form
//receive form submitted data
//views count


// review ajax file




// // 1. Create Express Server
// const { json } = require('body-parser');
// const { getEventListeners } = require('events');
// const express = require('express');
// //const ejs = require('ejs');
// const app = express();
// const port = 3001;

// app.listen(port, () => {
//     console.log('Your Server is running on: ' + port);
// })

// app.get('/', (req, res, next) => {
//     console.log('Here');
//     res.render("index");
// })


// // 2. Show the Html developed in DOM Assignment when path is '/add'



// // 3. Submit the data entered by the User to the same url.
// // a. Store all the User entered information locally(in the server page)
// //b. Redirect the Post to new route, '/view' page.


// // 4. View request should construct the html from the information stored by User and display the page.


// // 5. Create 404 page, so whenever User types in the path that is not found, this 404 is shown.


// // 5. Create an Error Page


// // 6. Add a link to the DOM html to see the statistics of the site, (this is a separate get request), this page shows the number of hits per url.



// // app.use(express.json());

// // app.use(express.urlencoded({ extended: false }));


// // app.use(function (req, res, next) {
// //     console.log(req, query);
// //     if (req.query == 5)
// //         next();
// //     else
// //         res.send("Ano non exisiting route");
// // })