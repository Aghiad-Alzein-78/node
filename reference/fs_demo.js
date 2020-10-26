const fs = require("fs");
const path = require("path");

//create a folder
// const mkDir = fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
//   if (err.code === "EEXIST") {
//     console.log("Folder already existed");
//     return;
//   }
//   console.log("Folder Created");
// });

//create a file and write to it
// const writeFile = fs.writeFile(
//   path.join(__dirname, "test", "test.txt"),
//   "Hello World",
//   (err) => {
//     if (err) throw err;
//     console.log("File Created and Written ");
//   }
// );

//append to existed file
// const append = fs.appendFile(
//   path.join(__dirname, "test", "test.txt"),
//   "\nI love Programming",
//   (err) => {
//     if (err) throw err;
//     console.log("File Created and Written ");
//   }
// );

//Read File.
// fs.readFile(path.join(__dirname, "test", "test.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
//Rename file
fs.rename(
  path.join(__dirname, "test", "my.txt"),
  path.join(__dirname, "test", "helloworld.txt"),
  (err) => {
    if (err) throw err;
    console.log("File Renamed");
  }
);
