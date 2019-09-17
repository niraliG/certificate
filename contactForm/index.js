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
 app.use(bodyParser.urlencoded({ extended: false }));
//  app.get('/', function (req, res) {
//     res.send('Hello World');
//   });
  app.use(express.static('public'));
  app.listen(3000);
  app.post('/submit-form', (req, res) => {
    const certificate_no = req.body.certificate_no;
    console.log(certificate_no);
  })
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  con.query("SELECT * FROM MainTable where Certificate_number="+certificate_no, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
