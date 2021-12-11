import express from "express"
import { addNewBook,getAllbook } from "../controllers/bookController.js"


const bookRouter = new express.Router()

bookRouter.get('/books',getAllbook)


bookRouter.post('/book',addNewBook)





export default bookRouter 