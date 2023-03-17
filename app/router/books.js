const express = require("express");
const router = express.Router(); // 建立 router 物件 存入變數

// 路徑設定 / API設計
router.get("/", (req,res) => {
  res.send("我是 /books basic router");
});

router.get("/page", (req,res) => {
  res.json({ message : "我是/books/page 的路徑"}); // 開起來會是client JSON 格式資料
});



// [moudle][1] 將router (object) 導出 ,等(別人) require 引用
module.exports = router;