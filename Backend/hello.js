// const http = require("http");
// const fs = require("fs");

import http from "http";
import fs from "fs";

const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer(function (req, res) {
    var URL = req.url;
    if(URL === '/'){
        URL = './index.html';
    }else{
        URL = '.' + URL;
    }
    fs.readFile(URL, function(err, data){
        if(err){
            res.writeHead(404, { "Content-Type": "text/html" });
            return res.end('404 Not Found! <br> For URL : ' + req.url);
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        // console.log(req.method);
        // console.log(req.url);
        // console.log(req.headers);
        return res.end();
    });
});

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
