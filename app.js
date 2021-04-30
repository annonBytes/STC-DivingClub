const express = require('express')
const mysql = require('mysql')


const app = express()
const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
}) 

