var fs = require('fs');
var mysql      = require('mysql');
var express = require('express');
var app = express();
 var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '',
   database : 'certificate'
 });
 app.get('/', function (req, res) {
    res.send('Hello World');
  });
  app.use(express.static('public'));
  app.listen(3000);
  connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... \n\n");  
    } else {
        console.log("Error connecting database ... \n\n");  
    }
    });
   

//  connection.query('SELECT * from < table name >', function(err, rows, fields) {
//    if (!err)
//      console.log('The solution is: ', rows);
//    else
//      console.log('Error while performing Query.');
//  });

 connection.end();