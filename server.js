
const express = require('express')
const app = express()
const path = require('path')
//const bodyParser = require('body-parser')//////
const api = require('./server/router/api')

app.use(express.static(path.join(__dirname, 'client')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(`/`, api)

const port = 3000
app.listen(port, function () {
    console.log('server running')
})