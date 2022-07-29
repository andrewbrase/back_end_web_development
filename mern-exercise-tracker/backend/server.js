// require packages that were installed
const express = require('express');
const cors = require('cors');

// mongoose will help us connect to our mongoDB database
const mongoose = require('mongoose')

require('dotenv').config();

// how we create our express server
const app = express();
const port = process.env.PORT || 5000;

// middleware - allow us to parse json
app.use(cors());
app.use(express.json())
// 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// we have to require these files and use the files in routes
const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users')

// whenever someone goes to the root URL and /exercises is at the end
// its going to load (app.use) everything in the exercises router
// same for the users router
app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

// this starts the server
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});