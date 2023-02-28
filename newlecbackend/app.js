const express = require("express");

const app = express();
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/errors");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUpload());

const auth = require("./routes/auth");
const products = require("./routes/product");

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use(errorMiddleware);

module.exports = app;
