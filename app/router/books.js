const express = require("express");
const router = express.Router(); // 建立 router 物件 存入變數
const fs = require("fs"); // File system,

// 路徑設定 / API設計
router.get("/", (req,res) => {
  res.send("我是 /books basic router");
});

router.get("/page", (req,res) => {
  res.json({ message : "我是/books/page 的路徑"}); // 開起來會是client JSON 格式資料
});

router.get("/data", (req,res) => {
  // 檔案系統的 I/O ===> 為非同步的動作(asynchronous)
  fs.readFile("data.json", "utf-8", (err,data)=>{
    // err 中括弧內為callback functuion 讀取完才能做的動作
    if(err){
      console.log(err);
      res.send("檔案有問題"); // 寫出測試錯誤 沒事的時候err為預設false
    } else {
    console.log(data); // 單純顯示
    console.log(typeof data); //檢查資料型別

    console.log("-".repeat(50));

    let result = JSON.parse(data); // 轉資料格式 轉乘 json
    console.log(result);
    console.log(typeof result); // 終於自動上色
    // res.send(data); 這是傳給前端字串資料
    res.json(result);
    };
  });
});

// 若想要用上式簡寫如下則會報錯

// router.get("/data-2", (req,res)=> {
//   let data2 = fs.readFile("data.json", "utf-8", () => {});
//   console.log(data2);

// }); 會得到undefined 因為data2根本沒讀到 要把data2 寫入中瓜裡面 (callback 內部)

// Synchronous 同步 與 Asynchronous 非同步問題 注意時間處理順序

// 同步馬上處理 令值/取值 for-loop處理 ,console.log

// 非同步為 執行某段程式時會向(event loop) 註冊該程式
// 主程式會繼續執行下一段 不理會該段程式碼的結果。 直到完成後執行 callback function
// 作為後續處理 ＤＢ讀取 檔案系統I/O(讀/寫) 發送request到其他server
// 咖啡店點飲料 划手幾

router.get("/multi-data" , (req,res)=>{
  // 讀 models/data${n}.json 的資料
  let result = {};

  // callback hell  --> 不佳
  fs.readFile("./models/data1.json" , "utf8" , (err,data1)=>{
    fs.readFile("./models/data2.json" , "utf8" , (err,data2)=>{
      fs.readFile("./models/data3.json" , "utf8" , (err,data3)=>{
        fs.readFile("./models/data4.json" , "utf8" , (err,data4)=>{
          fs.readFile("./models/data5.json" , "utf8" , (err,data5)=>{
            result["data1"] =  JSON.parse(data1);
            result["data2"] =  JSON.parse(data2);
            result["data3"] =  JSON.parse(data3);
            result["data4"] =  JSON.parse(data4);
            result["data5"] =  JSON.parse(data5);
            res.json(result);
          });
        });
      });
    });
  });
});

// 正題使用 data1~5傳入client如何做

// promise 要先宣告才能寫入路由

let readFilePromise = (datapath) => {
  return new Promise( (reslove,reject) => {
    fs.readFile(datapath,"utf8",(err,data) => {
      if(err) reject(err);
      else reslove(JSON.parse(data));
    });
  });
};


router.get("/multi-data-promise", (req,res)=>{

  let result = {}; // 記得用一個空集合

  readFilePromise("./models/data1.json")
  .then(data1=>{
    result["data1"] = data1;
    return readFilePromise("./models/data2.json")
  })
  .then(data2=>{
    result["data2"] = data2;
    return readFilePromise("./models/data3.json");
  })
  .then(data3=>{
    result["data3"] = data3;
    return readFilePromise("./models/data4.json");
  })
  .then(data4=>{
    result["data4"] = data4 ;
    return readFilePromise("./models/data5.json");
  })
  .then(data5=>{
    result["data5"] = data5;
    result["message"] = "我用 Promise!!";
    res.json(result);
  })
  .catch(err=>{
    res.send("檔案有問題")
    console.log(err);
  })
});

router.get("/multi-data-async", async (req,res)=>{
  try{
    let result ={};
    let data1 = await readFilePromise("./models/data1.json");
    let data2 = await readFilePromise("./models/data2.json");
    let data3 = await readFilePromise("./models/data3.json");
    let data4 = await readFilePromise("./models/data4.json");
    let data5 = await readFilePromise("./models/data5.json");
    result["data1"] = data1;
    result["data2"] = data2;
    result["data3"] = data3;
    result["data4"] = data4;
    result["data5"] = data5;
    result["message"] = "我是 Async 取得的"
    res.send(result);
  }catch(err){
    res.send("檔案有問題")
  }
});


// [moudle][1] 將router (object) 導出 ,等(別人) require 引用
module.exports = router;