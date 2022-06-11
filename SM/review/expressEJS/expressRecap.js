var express = require("express");
var ejs = require("ejs");
var app = express();
app.listen(80,function(){
 console.log(" Your server is running on port 80")
});

//Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
//EJS
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
 
// app.use(function(req,res,next){
// console.log(req.query);
// if(req.query.a==5)
// next();
// else
// res.send(" Any non existing route");
// })

app.get("/",function(req,res,next){
 console.log(" Hello ");
 //console.log(res);
 res.render("ejsReview", {
    name:"ram", age:45, skills:["java","Javascript"], // select
    location:[{address:"100 N",city:"Fairfield"}, 
    {address:"200 N",city:"Burlington"}]// 
   });

//  res.render("ejsReview",{location:"fairfield", skill:{ name:"Javascript Ninja",level: 1 },position:"Developer" });

});

// check if the nexted object has object value or not
// let obj = {skill:{ name:"Javascript Ninja",level: 1 },position:"Developer" };
// for(let a in obj){
//     if(typeof(obj[a]) == "object")
//     {
//         console.log(obj[a].name);
//         console.log(obj[a].level);
//     }
    
// }
//skill['name'] "java"
//skill['level'] "1"

// <%=    for print
// <%    onnanno
// <%- ejs import
// [] thgaklei of -> array value
// {} thaklei in -> key of object
// object value > object[key]
//it will not work here as obj.key bcz key here is variable

// app.use(function(req,res,next){
// console.log("Middleware 2");
 
// })