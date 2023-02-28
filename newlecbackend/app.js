const express = require("express");

const app = express();
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
<<<<<<< HEAD
const errorMiddleware = require("./middlewares/errors");
=======
const auth = require("./routes/auth");
const products = require("./routes/product");
const errorMiddleware = require("./middlewares/error");
>>>>>>> refs/remotes/origin/main

app.use(express.json());
app.use(cookieParser());
<<<<<<< HEAD
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUpload());

const auth = require("./routes/auth");
const products = require("./routes/product");
=======
// app.use(fileUpload());
>>>>>>> refs/remotes/origin/main

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use(errorMiddleware);

module.exports = app;
