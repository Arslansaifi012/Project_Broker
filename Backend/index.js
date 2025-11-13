
import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express() ;
const PORT = process.env.PORT || 8000  ;

app.use(express.json()) ;
app.use(cors()) ;

app.get('/', (req, res) =>{
    res.send("backend running successfully")
})

app.listen(PORT , () =>{console.log(`server is running at ${PORT} port`)}) ;