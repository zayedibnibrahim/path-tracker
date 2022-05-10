require('./models/User')
require('./models/Track')

const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const app = express()
const port = 3000
const authRouters = require('./routes/authRouters')
const trackRouter = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth')
const connectDB = require('./db')

dotenv.config()
app.use(bodyParser.json())

connectDB()

app.get('/', requireAuth, (req, res) => {
  res.send(`Your Email is: ${req.user.email}`)
})

app.use(authRouters)
app.use(trackRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
