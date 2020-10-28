const http = require("http");
const path = require("path");
const fs = require("fs");
const server = http.createServer((req, res) => {
  /*if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(content);
        res.end();
      }
    );
  } else if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  } else if (req.url === "/api/users") {
    fs.readFile(path.join(__dirname, "users.json"), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(content);
    });
  }*/
  //Building  file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT=${PORT}`);
});
