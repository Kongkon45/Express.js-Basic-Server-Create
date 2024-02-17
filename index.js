// const express = require('express');
// const app = express();

const app = require('./app')
const port = 3000;
app.listen(port, ()=>{
    console.log(`server is runnig successfully at http://localhost:${port}`)
})