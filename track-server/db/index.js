const mongoose = require('mongoose')

const mongoURI =
  'mongodb+srv://trackerZayed:zayed_3996@cluster0.6gnbd.mongodb.net/trackerApp?retryWrites=true&w=majority'

const connectDB = () => {
  mongoose.connect(mongoURI, {
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
