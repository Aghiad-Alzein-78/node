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
  //Extension of the File
  let extname = path.extname(filePath);
  let contentType = "text/html";
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".jpg":
      contentType = "image/jpeg";
      break;
    case ".png":
      contentType = "image/png";
      break;
  }

  //Reading the convenient file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "content-type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        res.writeHead(500, { "content-type": "text/html" });
        res.end(`Server Error:${err.code}`);
      }
    } else {
      res.writeHead(200, { "content-type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT=${PORT}`);
});
