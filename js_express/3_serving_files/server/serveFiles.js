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

      const express = require('express');
      const app = express();

      // express.static is a piece of middleware that comes built into Express
      // it’s purpose is to try to find and return the static file requested.
      // The parameter passed to the express.static function is the name of
      // the directory we want Express to serve files from.
      app.use(express.static('public'));

      const path = require('path');
      
      app.get('/', (request, response) => {
          // parse the URL data
          var queryData = url.parse(request.url, true);
          //console.log(queryData);
          // test if queryData contains '?'
          var query = "";
          if (queryData.href.includes('?')) {
              // assign a ﬁle name for retrieval
              query = "page" + queryData.search.replace('?','');  
          } else {
              query = "index";
          }
          //console.log(query); // e.g. page1
          // Read the ﬁle. If it exists send the contents back.
                    
          response.sendFile(path.resolve('../client/' + query + '.html'));
          //console.log(path.resolve('../client/' + query + '.html'));
        
      });
      
      app.listen(port, () => {console.log('Express listening...')});
      
}
catch(err) {
  console.log("Msg: " + err + ".");
}

