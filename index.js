import routes from "./src/routes/index.js";
import express from "express";
import mysql from "mysql";

var app = express();
const port = process.env.PORT || 3000;
app.listen(port);

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "testdb",
});
var sql = "SELECT * FROM user";

con.connect(function (err) {
  if (err) {
    throw err.stack;
  } else console.log("connect success");
  con.query(sql, function (err, results) {
    if (err) throw err;
    console.log(results);
  });
});

app.use(express.json());
routes(app);
