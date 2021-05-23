 var express=require('express');
 var ejs=require('ejs');

  var app=express();

  var bodyParser=require('body-parser');
  app.use(bodyParser.urlencoded({extended:false}));
  app.use(express.static(__dirname));

  app.set("views","./views");
  app.set("view engine","ejs");
  
 const myRoutes=require('./Controller/route');
  app.use(myRoutes);
var server=app.listen(1102,()=>
{
    console.log("Server is listening 1102");
});
     
