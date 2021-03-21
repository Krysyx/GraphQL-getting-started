const dotenv = require("dotenv");
dotenv.config({ path: `${process.env.NODE_ENV}.env` });

const express = require("express");
const path = require("path");
const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.static(path.resolve()));
server.use(express.static(`${__dirname}/public`));
server.listen(PORT, () => console.log(`Web server running on port ${PORT}`));

module.exports = process.env.PORT;
