
// const mysql = require('mysql');

// const pool =mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "pfe",
//   });
  var mysql = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  
  user     : 'root',
  password : '',
  //socket   : '/Applications/MAMP/tmp/mysql/mysql.sock',
  database : 'pfe'
});

connection.connect(function(err) {
    if (err){
      console.log(err);
      //throw err;
    } else {
      console.log('DB connected :)');
    }
});

module.exports = connection;