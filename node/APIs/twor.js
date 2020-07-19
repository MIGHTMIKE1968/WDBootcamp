const request = require('request');

request('https://jsonplaceholder.typicode.com/users/1', function(error, res, body) {
    if(!error && res.statusCode == 200) {
      const parsedData = JSON.parse(body);
      console.log(`${parsedData.name } lives in ${parsedData.address.city}.`);
  }
});
