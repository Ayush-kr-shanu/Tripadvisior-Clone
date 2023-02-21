const express=require('express')
const { connection } = require('./db')

require('dotenv').config()

const app=express()

app.use(express.json())

app.get('/',async(req,res)=>{
    res.send("HOME PAGE")
})


const port=process.env.port
app.listen(port,async()=>{
    try {
        await connection
        console.log('DB is connected');
    } catch (err) {
        console.log(err);
    }
})