const express = require("express");
const router = express.Router();


router.get("/greeting",(req,res)=>{
  res.send("我使用res.send來傳遞後端路由資料 hello world")
});

router.get("/", (req,res)=>{
  // 在內部定義區域變數即可使用 ？name=${name}
  // 如何設定輸入name呢 ＝> 在 name變數中= req.query.name
  let name = req.query.name;
  res.send(`Hello,${name} welcome to the node.js ~~ `);
});

module.exports = router;
