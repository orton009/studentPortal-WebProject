var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");

var index = require('./routes/index');
var students  = require('./routes/students');

var port=  3000 ;
var app = express() ;

//view Engine 
app.set('views' , path.join(__dirname ,  'views' ));
app.set('view engine' , 'ejs');
app.engine('html' , require('ejs').renderFile);

//set static folder
//app.use(express.static(path.join(__dirname , 'client')));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});
//Body Parser Mw
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false})) ;

app.use('/' , index);
app.use('/api' , students);

app.listen(port , function(){
    console.log('server started on port ' +  port);
});
