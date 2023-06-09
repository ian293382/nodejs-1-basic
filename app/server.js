const express = require("express");
const app = express();
const portNum = 8088;

// [module][2] 引入 /router/books.js 程式
const booksRouter = require("./router/books.js");
// about require
const aboutRouter = require("./router/about.js");

// hello require
const helloRouter = require("./router/hello.js");

const introductionRouter = require("./router/introduction.js");

app.get("/", (req,res) => {
  res.send("hihi, I'm NOde.js server.");
});

app.get("")

// [module][3] 將/books require 導入 booksRputer
app.use("/books", booksRouter);

// app use about
app.use("/about", aboutRouter);

// app use hello
app.use("/hello", helloRouter);

// app use introduction
app.use("/introduction", introductionRouter);

// 404 錯誤
app.use((req,res)=>{
  res.status(404).send("API 尚未開發!");
});


app.listen(portNum , () => {
  console.log(`Server is running at localhost${portNum}`)
});