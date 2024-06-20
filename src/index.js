// import routes from "./routes";
// import express from "express";
// const app = express();

// const port = process.env.PORT || 3000;
// app.listen(port);

// app.use(express.json());

// app.get("/", function (req, res) {
//   res.send("Hello World! 123456");
// });
// app.use(express.json());
// routes(app);

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   database: "testdb",
// });
// var sql = "SELECT * FROM user";

// con.connect(function (err) {
//   if (err) {
//     throw err.stack;
//   } else console.log("connect success");
//   con.query(sql, function (err, results) {
//     if (err) throw err;
//     console.log(results);
//   });
// });

// app.get("/public/home.html", function (req, res) {
//   con.query(sql, function (err, results) {
//     if (err) throw err;
//     res.send(results);
//   });
// });
