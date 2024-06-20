import routes from "./src/routes/index.js";
import express from "express";

var app = express();
const port = process.env.PORT || 3000;
app.listen(port);

app.use(express.json());

// require("./src/index.js")(app);
routes(app);
