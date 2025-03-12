require('dotenv').config()
const express = require('express')

// Create express app
const app = express()

//Middleware (Middle of getting request and sending response)
app.use((req, res, next) => {
    console.log("Path:", req.path, "| Method:", req.method) //Log request coming in
    next() //Allows code to continue
})

//React to GET request (route router)
app.get('/', (req, res) =>{
    res.json({msg: "Welcome to the app!"})
})

//Listening for request
app.listen(process.env.PORT, () =>{
    console.log('Listening on port', process.env.PORT)
})

