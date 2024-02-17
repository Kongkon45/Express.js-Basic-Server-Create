const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send("I am a get request at home router");
    res.end()
})
app.get('/about',(req, res)=>{
    res.send("I am a get reques at about route");
    res.end()
})
app.post('/',(req,res)=>{
    res.send("I am a post request at home route");
    res.end()
})
app.put("/", (req, res)=>{
    res.send("i am a put request at home route");
    res.end()
})
app.delete("/", (req, res)=>{
    res.send("i am delete request at delete route");
    res.end()
})

module.exports = app;