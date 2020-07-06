var express = require('express');
var app = express();
var Util = require('./utils/Util');

app.get('/' , async(req, res)=>{
    var result = await Util();
    var resData = JSON.parse(result);
    console.log(resData);
    res.send(resData);
})


app.use(express.json);

app.listen(8000, ()=>{
    console.log(`Server is Starting at http://localhost:8000`);
    
})