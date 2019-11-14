require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const { SERVER_PORT } = process.env

const app = express()

app.use(express.json())

app.listen(SERVER_PORT, () =>
  console.log(`This server port is so ${SERVER_PORT}`)
)
