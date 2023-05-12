const express = require('express');
const app = express()
const port = 5000;



app.listen(port, ()=> {
    console.log("Listen to Port: ", port);
});


app.get('/', (req, res) => {
    res.send('Hallo')
  })