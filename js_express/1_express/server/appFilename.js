//
// appFilename.js
//
try {
    const express = require('express');
    const appServer = express();
    const port = 999;
    appServer.get('/', (request, response) => response.send('Hello World'));
    appServer.listen(port, () => console.log(`Ok on port ${port}`));
}
catch(err) {
    console.log('Error: ' + err);
}
