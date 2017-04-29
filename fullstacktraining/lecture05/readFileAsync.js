var fs = require('fs');

var ondFileLoad = function(err, file) {
    console.log("Got the file");
};

console.log("Going to get a file");
fs.readFile('readFileSync.js', ondFileLoad);

console.log("App continues...");