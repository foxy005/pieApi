const express= require('express')
const csvtojson = require('csvtojson')

const app = express()
const port = 3000;

const filePath = 'Awaiting.csv';

app.get('/data',(req,res)=>{
    csvtojson()
    .fromFile(filePath)
    .then((jObj)=>{
        res.send(jObj) 
    })
    
})

app.listen(port,()=> console.log('App is running'))
