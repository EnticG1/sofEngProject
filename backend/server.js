require('dotenv').config()

const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const landingPageRoute = require('./routes/landingPage')
const userRoute = require('./routes/user')
const adminPageRoute = require('./routes/adminPage')

// Create express app
const app = express()
app.use(cors())

//Middleware (Middle of getting request and sending response)
app.use(express.json())
app.use((req, res, next) => {
    console.log("Path:", req.path, "| Method:", req.method) //Log request coming in
    next() //Allows code to continue

// Routes //
app.use('/api/landing', landingPageRoute)
app.use('/api/user', userRoute)
app.use('/api/admin', adminPageRoute)

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
})
