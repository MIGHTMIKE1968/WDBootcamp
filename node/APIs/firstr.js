const request = require('request');

request('http://www.bing.com', function(error, res, body) {
  if(error) {
    console.log("HEY SOMETHINGS NOT RIGHT!");
    console.log(error);
  } else {
    if(res.statusCode == 200) {
      // THINGS WORKED!
      console.log(body);
    }
  }
});
