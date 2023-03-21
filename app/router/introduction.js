const express = require("express");
const { readFileSync } = require("fs");
const router = express.Router();
const fs = require("fs"); // File system,

router.get("/page", (req,res)=>{
  res.send("這是introduction 頁面");
});

// 要宣告讀取資料才能用 Promise async/await

let readFilePromise = (datapath) => {
  return new Promise( (reslove,reject) => {
    fs.readFile(datapath,"utf8",(err,data) => {
      if(err) reject(err);
      else reslove(JSON.parse(data));
    });
  });
};

router.get("/data", async(req,res)=> {
  try{
    let result = {};
    let dataname = await readFilePromise("dataname.json");
    result["result"] = dataname;
    res.send(result);
  }catch(err){
    res.send("檔案有問題");
    console.log(err);
  };
});

  // 進階 GET /introduction/data/:EmpNo => 透過 EmpNo 取得對應的資料 ex:
  // GET /introduction/data/005  , 回傳 { "Name": "Jenny", "EmpNo": "005", "Age": 33 }
  // GET /introduction/data/002  , 回傳 { "Name": "Leo"  , "EmpNo": "002", "Age": 24 }
  // GET /introduction/data/1234 , 回傳 {}

  // 思考要多一個公司將資料切碎就要 =>新增東西做方法
  // 要手動出入EmpNo 就是要req.query.EmpNo
  // result 為一個Object 用取直的方式做答案
 // GET /introduction/data/:EmpNo API
router.get("/data/:EmpNo" ,async (req,res)=>{
  try{
    let dataname = await readFilePromise("dataname.json");
    let EmpNo = req.params.EmpNo;

    let result = dataname.filter(ele => ele["EmpNo"] === EmpNo);
    let output = result.length >0 ? result[0] : {};
    res.json(output);

    // [
    //   { Name: 'Jeff', EmpNo: '001', Age: 18 },
    //   { Name: 'Leo', EmpNo: '002', Age: 24 },
    //   { Name: 'Keven', EmpNo: '003', Age: 26 },
    //   { Name: 'Holy', EmpNo: '004', Age: 18 },
    //   { Name: 'Jenny', EmpNo: '005', Age: 33 }
    // ]

    /// OK , 但還可以更好
    // if(result.length >0 ){
    //   let output = result[0];
    //   res.json(output);
    // }else{
    //   res.json({});
    // };

  }catch(err){
    res.send("檔案有問題！！！");
  };
});

module.exports = router;
