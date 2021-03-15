// server.js
var app = require('./app');
var port = process.env.PORT || 3000;
var http = require('http').createServer(app);
var categorySeeder = require('../seeds/CategoryTableSeeder');
var mailGun = require('../config/mailgun');



// Default launch URL
app.use('/api/v1', function(req, res) {
    res.status(200).send({ message: 'KeyedIn API Server is Running' });
});


//mailGun.sendMail();

//categorySeeder.run();

// Starting API Server
var server = http.listen(port, function() {
 console.log('KeyedIn API Server listening on port ' + port);
});
