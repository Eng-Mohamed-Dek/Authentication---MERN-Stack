import express from 'express'
const routes = express.Router()
import { login, signup } from "../controllers/userController.js"

// create student - CRUD - create
routes.post('/signup' , signup)

// read student - CRUD - read
routes.post('/login' , login )

export default routes;