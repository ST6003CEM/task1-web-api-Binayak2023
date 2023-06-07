const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");
// app.use(express.json());
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const options = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,

}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(fileUpload());

//config
dotenv.config({
  path: "backend/config/.env",
});

app.use(cors(options));

// import route
const product = require("./routes/ProductRoute");
const user = require("./routes/UserRoute");
const order = require("./routes/OrderRoute");
const payment = require("./routes/PaymentRoute");

app.use("/api/v2", product);

app.use("/api/v2", user);

app.use("/api/v2", order);

app.use("/api/v2", payment);


// error handler
app.use(ErrorHandler);

module.exports = app;

