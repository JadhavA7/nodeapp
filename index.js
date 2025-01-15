var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
<<<<<<< HEAD
 res.send('ho kya raha he ');
=======
 res.send('krishna accha kro mere sath');
>>>>>>> fc1b500c709a8c29658bf1a14358ef75376691e2
});//listen to port 5000 by default
app.listen(process.env.PORT || 5000);
 
module.exports = app;
