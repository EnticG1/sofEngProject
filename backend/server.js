require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const landingPageRoute = require('./routes/landingPage')
const loginPageRoute = require('./routes/loginPage')

// Create express app
const app = express()

//Middleware (Middle of getting request and sending response)
app.use(express.json())
app.use((req, res, next) => {
    console.log("Path:", req.path, "| Method:", req.method) //Log request coming in
    next() //Allows code to continue
})

// Routes //
//Use ./routes/landingPage.js router
app.use('/api/', landingPageRoute)

// Use ./route/loginPage.js router
app.use('/login', loginPageRoute)

// Connect to DB
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        //Listening for request once connected to the DB
        app.listen(process.env.PORT, () =>{
            console.log('Listening on port', process.env.PORT)
        })
    })
    .catch((error) => { //Error catching
        console.log(error)
    })



