const path = require("path");

const express = require('express');
const app = express();

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/AngularTheorizeStudio'));

// Get thumbnail picture
app.get('/thumbnail', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/AngularTheorizeStudio/assets/custom-img/Background.png'));
});

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/AngularTheorizeStudio/index.html'));
  });

// Start the app by listening on the default port
app.listen(process.env.PORT || 8080);