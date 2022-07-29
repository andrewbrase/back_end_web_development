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

// this starts the server
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});