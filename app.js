const express = require('express')
const cors = require('cors')


const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var corsOptions = {
    origin: "http://localhost:8081"
  };

app.use(cors(corsOptions));

//simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to stc application." });
  });
  

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
}) 

