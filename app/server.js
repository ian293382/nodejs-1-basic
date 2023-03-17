const express = require("express");
const app = express();
const portNum = 8088;

// [module][2] 引入 /router/books.js 程式
const booksRouter = require("./router/books.js");
// about require
const aboutRouter = require("./router/about.js");

app.get("/", (req,res) => {
  res.send("hihi, I'm NOde.js server.");
});

app.get("")

// [module][3] 將/books require 導入 booksRputer
app.use("/books", booksRouter);

// app use about
app.use("/about", aboutRouter);


app.listen(portNum , () => {
  console.log(`Server is running at localhost${portNum}`)
});