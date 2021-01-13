const express = require('express');
const path = require('path');

let app = express();

app.listen(3000, () => {
    console.log("Servidor corriendo")
});

app.get('/', function(req, res){
    let htmlPath = path.resolve(__dirname, './index.html')
    res.sendFile(htmlPath)
});


app.get('/sobre', function(req, res){
    console.log("Entraste para saber de nosotros?")    
});

