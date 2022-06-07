// Get Request -> give the html;
// Post Request -> stores all in this Files where you started the server
// from post redirect -> view page -> whatever user has entered
// Error HTML
// Not founf page
// Stats -> hits of each page

const { setDefaultResultOrder } = require('dns');
const express = require('express');
const app = express();
var path = require("path")
// local variable to store
let storeData;

app.listen(3100, () => {
    console.log('Your Server is now Running in Port : 3100');
})

//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res, next) {
    res.send("Welcome to Home Page");
})

app.get("/form", function (req, res, next) {
    console.log('This if the Form Page Where you Insert your Data');
    res.sendFile(path.join(__dirname, "./", "dom.html"))
});

app.post("/form", function (req, res, next) {
    res.redirect("postData")
});

app.get("/view", function (req, res, next) {
    console.log('In the post', req.body.name, req.body.skill);
    storeData = req.body;
    res.redirect("/view")
});

app.post("/view", function (req, res, next) {
    console.log('In the view');
    res.send("<label>Name" + storeData.checkboxvalue + "</label>")
});

// app.post("/postData", function (req, res, next) {
//     console.log('In the post', req.body.name, req.body.skill);
//     res.redirect("back")
// });

// app.get("/view", function (req, res, next) {
//     console.log('In the view');
//     res.send(" My View")
// });

// app.use((req, res, next) => {
//     res.sendFile(path.join(__dirname, "../", "html", "error.html"))
// });






