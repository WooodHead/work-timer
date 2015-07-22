var path = require("path");
var express = require("express");
var livereload = require("express-livereload");
var app = express();
var env = process.env.NODE_ENV || 'development';

app.use(express.static(path.resolve(__dirname, "app")));

app.use("*", function(req, res) {
    var options = {
        root: path.resolve(__dirname, "app"),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    res.sendFile("index.html", options);
});

if(env == "development") {
    var config = {
        watchDir: path.resolve(__dirname, "app")
    };
    livereload(app, config);
}

app.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function(err) {
    if(err) return console.error(err);
    console.log("Server running on", process.env.IP || 'localhost', "port", process.env.PORT || 3000);
});