// Dependencies
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout_tracker',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

