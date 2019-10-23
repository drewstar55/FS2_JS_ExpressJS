//
// serveFiles.js
//
try { 
      // Require the HTTP module for basic server functionality
      //const http = require('http');
      // Set the hostname
      //const hostname = 'localhost';
      // listen for requests on port 80 for this exercise
      const port = 80;
      // URL handling
      var url = require('url');
      // Express
      const express = require('express');
      const appServer = express();

      // express.static is a piece of middleware that comes built into Express
      // it’s purpose is to try to find and return the static file requested.
      // The parameter passed to the express.static function is the name of
      // the directory we want Express to serve files from.
      appServer.use(express.static('public'));
      const path = require('path');
      
      // form data
      appServer.get('/', (request, response) => {
          // parse the URL data
          var queryData = url.parse(request.url, true);
          // test if queryData contains '?'
          var query = "";
          if (queryData.href.includes('?')) {
              // assign a ﬁle name for retrieval
              query = "page" + queryData.search.replace('?','');  
          } else {
              query = "index";
          }
          
          //  Send the ﬁle to the client. If it exists send the contents back, if not return a 404 error
                  
          response.sendFile(path.resolve('../client/' + query + '.html'));

          // Test for 404 not found
          appServer.use(function (request, response, next) {
            response.status(404).send('File Not Found')
          })
          // this piece of code has not been implemented
          // will be asking for some help to understand
          /*
          appServer.get('/routeToRestrictedAccessArea',
            function checkIfAllowed (request, response, next) {
            if (!request.user.isAllowed) { // isAllowed is set earlier
            // User is not allowed, continue to other area
            next('route')
            } else {
            next()
            }
            }, function getRestrictedContent (request, response, next) {
            RestrictedContent.find(function (err, docForClient) {
            if (err) return next(err)
            response.json(docForClient)
            })
            })
            */
                
          });
      
      appServer.listen(port, () => {console.log('Express listening...')});
      
}
catch(err) {
  console.log("Msg: " + err + ".");
}

