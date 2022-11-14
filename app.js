const express = require("express");

const app = express();
const logger = require("./config/logger");
const connecDB = require("./config/mongodb");
connecDB();
const homeRouter = require("./routes/home_page");
const home_page_medeelelRouter = require("./routes/home_page_medeelel");
app.use(express.json());
app.use("/home_pages", homeRouter);
app.use("/home_page_medeelel", home_page_medeelelRouter);
// npm install --save winston

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("info", `server maani port ${port} deer amjilttai aslaa`);
});
