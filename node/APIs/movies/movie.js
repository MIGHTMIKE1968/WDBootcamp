const express = require('express');
const app = express();

const request = require('request');

app.set("view engine", "ejs");

app.get("/results", function(req, res) {
  request("http://www.omdbapi.com/?s=batman&apikey=deaa76ba", function(error, response, body) {
    if(!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.render("results", {data: data});
    }
  });
});


console.log('The Movie App Has Started');
app.listen(3000);
