const path = require("path");

//Basename
console.log(__filename);
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));
//Directory name
console.log("Dir:", __dirname);
console.log(path.dirname(__filename));

//Get extension
console.log(path.extname(__filename));

//Create a Path object
console.log(path.parse(__filename));

//Join =concatenate path
console.log(path.join(__dirname, "test", "hello.html"));
