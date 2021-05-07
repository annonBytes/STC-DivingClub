const express = require("express");
const bodyParser = require('body-parser');

//require these routes created seperately
const authRoute = require("./routes/Authentication/authApi.js");


const app = express();
app.use(bodyParser.json());


app.use(authRoute);

// sendSMTPMail()

//export route for unit testing and chat
module.exports = app;