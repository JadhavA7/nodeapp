var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
<<<<<<< HEAD
 res.send('hello world ');
=======
 res.send('hello world');
>>>>>>> 3f8a0ce4c33089613148f9cf443e41ab3049d7b5
});//listen to port 5000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
