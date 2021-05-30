const express = require('express')
const bodyParser = require('body-parser')
const db = require('./models')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))



app.use(express.static('app/public'))


const authorRoutes = require('./app/api/author')
const postRoutes = require('./app/api/post')

authorRoutes(app, db)
postRoutes(app, db)

module.exports = app