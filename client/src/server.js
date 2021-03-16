const express = require("express");
const server = express();

server.use(express.static(`${__dirname}/public`));
server.listen(8080, () => console.log("Web server running on port 8080"));
