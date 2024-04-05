const express = require('express');
require('dotenv').config();
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const connectionUrl = "mongodb://127.0.0.1:27017/voosh"
mongoose.connect(connectionUrl)
    .then(() => {
        console.log("MongoDB connected successfully");
        app.listen(port,()=>{
            console.log("server is on ",port);
        })
       
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });


app.use(express.json());
app.use('/', authRoutes);

module.exports = app;
