const mongoose = require('mongoose')

const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  })
  mongoose.connection.on('connected', () => {
    console.log('Connected to mongo Instance')
  })
  mongoose.connection.on('error', (err) => {
    console.error('Error Connecting to mongo', err)
  })
}

module.exports = connectDB
