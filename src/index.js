import express from "express"
import bookRouter from "./routes/bookRouter.js"
import './db/mongoose.js'
const app = express()


app.use(express.json())
app.use(bookRouter)

const port = process.env.APP_PORT || 10010

app.listen(port, ()=> {
    console.log(`Server is up on port ${port}`)
})