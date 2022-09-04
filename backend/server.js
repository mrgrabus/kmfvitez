const express = require("express");
const cors = require("cors");
const http = require("http");
const sgMail = require("@sendgrid/mail");
const { sequelize } = require("./models");
const schedule = require("node-schedule");

var bodyParser = require("body-parser");

const app = express();
const server = http.createServer(app);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json({ limit: "50mb" }));

// static images folder
app.use("/uploads/", express.static("./uploads/"));
app.use("/uploads/players", express.static("./uploads/players"));
app.use("/uploads/grbovi", express.static("./uploads/grbovi"));

app.use(cors());
require("./routes")(app);

// app.post('/api/auth/login', (req, res, next) => {
//     console.log(req?.body)
// })

sgMail.setApiKey(
  "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"
);

app.get("/send-email", (req, res) => {
  //Get Variables from query string in the search bar
  const { recipient, scheduleTime, date } = req.query;

  //Sendgrid Data Requirements
  const job = schedule.scheduleJob(scheduleTime, function () {
    const msg = {
      to: recipient,
      from: "edin.grabus.off@gmail.com",
      subject: `Obavijest - Utakmica KMF Vitez ${date}`,
      text: `${date} Utakmica KMF Vitez`,
    };
    //Send Email
    // console.log(msg);
    // sgMail.send(msg).then((msg) => console.log(msg));
  });
});

server.listen(process.env.PORT || 5000, () => {
  console.log("SERVER IS UP AND RUNNING");
  sequelize.sync({
      alter: true
  })
});
