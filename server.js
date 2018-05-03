var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('public/login.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080); 


//parse POST
function handle(request, response){
    var post_handle = function(request, response) {
      if (request.method == 'POST') {
          // save all data received
          var postdata = '';
      
          // receiving data
          request.on('data', function(chunk) {
              postdata += chunk;                                                                 
              // Avoid too much POST data                                                        
              if (postdata.length > 1e6)
                  request.connection.destroy();
          });
  
          // received all data
          request.on('end', function() {
              var post = qs.parse(postdata);
              // handle post by accessing
              // post['name']
              // response.send(process(post['name']));
          });
      } else {
          console.log("Non POST request received at " + request.url);
      }
  }
  }


  