// testRequest.js
//
try {
    const express = require('express');
    const appServer = express();
    const port = 3000;
    
    appServer.get('/', (req, res) => res.send('Received a GET request at ROOT'));
    appServer.post('/', (req, res) => res.send('Received a POST request at ROOT'));
    appServer.use(function (req, res, next) {
        next(res.send('Time: %d', Date.now()))
      })
    appServer.listen(port, () => console.log(`Ok on port ${port}`));
}
catch(err) {
    console.log('Error: ' + err);
}
