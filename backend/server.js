const express = require("express");
const cors = require("cors");
const http = require("http");
const sgMail = require("@sendgrid/mail");
const { sequelize } = require("./models");

var bodyParser = require("body-parser");

//sendgrid api key
sgMail.setApiKey("vas sendgrid api key");

const app = express();
const server = http.createServer(app);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json({ limit: "50mb" }));

// static images folder
app.use("/uploads", express.static("./uploads"));
app.use("/uploads/players", express.static("./uploads/players"));


app.use(cors());
require("./routes")(app);

// app.post('/api/auth/login', (req, res, next) => {
//     console.log(req?.body)
// })

app.get("/send-email", (req, res) => {
  //Get Variables from query string in the search bar
  const { recipient } = req.query;

  //Sendgrid Data Requirements
  const msg = {
    to: recipient,
    from: "edin.grabus.off@gmail.com",
    subject: "Obavijest o utakmici KMF Vitez",
    text: "Demo",
  };

  //Send Email
  sgMail.send(msg).then((msg) => console.log(msg));
});

server.listen(process.env.PORT || 5000, () => {
  console.log("SERVER IS UP AND RUNNING");
  // sequelize.sync({
  //     alter: true
  // })
});
