import express from 'express'
import mongoose from 'mongoose'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'

// express 
const app = express()

// middlewares
app.use(express.json())
app.use(cors())

// routes 
app.use('/', userRoutes)

// connect to the database through mongoose 
mongoose.connect("mongodb://localhost:27017/BackendCrash")
    .then(() => {
        // listen port 
        app.listen(3000, () => {
            console.log("Server is working and db connected")
        })
    })
    .catch((error) => console.log(error.message))

