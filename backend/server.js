const app = require("./app.js");
// const dotenv = require("dotenv");


const connectDatabase = require("./config/database");

// {==================CONFIG=================}
require("dotenv").config({ path: "backend/config/config.env" });


// {=======================DATABASE-CONNECTIONS==========================}

const port = process.env.PORT || 5000;
connectDatabase()
const server = app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});

