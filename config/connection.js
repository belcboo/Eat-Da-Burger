// Require the MySQL NPM package
var mysql = require("mysql");

var connection;


connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'burgers_db'
});

connection.connect(function(err) {
  if (err) throw err
})


module.exports = connection;
