const express = require("express");
const app = express();
const morgan = require("morgan");
const { mongoose } = require("./database");

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/products", require("./routes/products.routes"));
app.use("/api/pedidos", require("./routes/pedidos.routes"));

// Starting server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
