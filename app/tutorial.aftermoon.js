const { Console } = require("console");
const fs = require("fs");
// 處理讀取檔案


// 1. readFileSync
let d1 = fs.readFileSync("models/data1.json", "utf8");
console.log("d1 finish!!");
let d2 = fs.readFileSync("models/data2.json", "utf8");
console.log("d2 finish!!");
// let d3 = fs.readFile("models/data3.json", "utf8", ()=>{});
// console.log("d3 finish!!");

console.log(JSON.parse(d1));
console.log(JSON.parse(d2));
// console.log(JSON.parse(d3)); // 此時d3會出錯 這就是差異

// 但不實用太低等級


// 2. use Promise

console.log("-".repeat(50));
// 1) declear Promise 讀取檔案

// let readFilePromise = (dataPath)=>{
//   return new Promise((reslove,reject)=>{


//     fs.readFile(dataPath , "utf8", (err,data)=>{
//       if(err){
//         reject(err);
//       } else {
//         reslove(data);
//       };
//     });
//   });
// };

// //2 使用 Promise
// readFilePromise("./models/data1.json")
// .then(result=>{
// console.log(result);
// })
// .catch(err =>{
//   console.log(err);
// });

// readFilePromise("./models/data2.json")
// .then(result=>{
// console.log(result);
// })
// .catch(err =>{
//   console.log(err);
// });

// // flipCoin
// let flipCoin= ()=>{
//   return new Promise( (reslove,reject) => {
//     setTimeout(()=>{ // 前面寫判斷 後面寫延遲1000ms
//       // if-else
//       if(Math.random() >0.5){
//         reslove("working");
//       }else{
//         reject("quit");
//       }
//     }, 500);
//   });
// };

// flipCoin()
// .then(result => {
//   console.log("我是 flipCoin .then zeon");
//   console.log(result);
// })
// .then(r=>{ // 注意THEN 為函數 r 可以RETURN r
//   console.log("this is second");
// })
// .then(r=>{
//   console.log("this is third");
// })
// .then(r=>{
//   console.log("this is forth");
// })
// .catch(err=>{
//   console.log("我是 flipCoin .catch zeon");
//   console.log(err);
// });


// // simple 全部完成只要有一個失敗全部打到CATCH區
// Promise.all([
//   flipCoin(),
//   flipCoin(),
//   flipCoin()
// ])
// .then(r=>{
//   console.log(r);
// })
// .catch(err=>{
//   console.log("Promise .catch zeon")
//   console.log(err);
// })




// 令值多個資料
let output = {};

// readFilePromise("./models/data1.json")
//     .then(data1=>{
//       output["data1"] = data1;
//       return readFilePromise("./models/data2.json")
//     })
//     .then(data2=>{
//       output["data2"] = data2;
//       return readFilePromise("./models/data3.json")
//     })
//     .then(data3=>{
//       output["data3"] = data3;
//       console.log(output);
//     })
//     .catch(err=>{
//       console.log(err);
//     });


// 3) async/await
// 使用 FlipCoin

// flipCoin
let flipCoin= ()=>{
  return new Promise( (reslove,reject) => {
    setTimeout(()=>{ // 前面寫判斷 後面寫延遲1000ms
      // if-else
      if(Math.random() >0.5){
        reslove("working");
      }else{
        reject("quit");
      }
    }, 500);
  });
};

// Promise
// flipCoin()
// .then(r=>{
//   console.log("success",r);
// })
// .catch(err=>{
//   console.log("fail",err)
// })

// 使用 asunc / await

let main = async () => {
  try{ // fg3m/4
    let r = await flipCoin();  ////執行完才能往下走 沒家await 還是非同步
    console.log("Async / Await finish!!");
    console.log(r);
  } catch(err){
    console.log(err);
  };
};

main();


// 讀取檔案 為最主流語法


let readFilePromise = (dataPath)=>{
  return new Promise((reslove,reject)=>{

    fs.readFile(dataPath , "utf8", (err,data)=>{
      if(err){
        reject(err);
      } else {
        reslove(data);
      };
    });
  });
};

let main2 = async() =>{
  try{
    //1. 使用 await 轉成"同步"語法（執行完才能往下
    //2. await 後的 function 要 return Promise
    //3. await 要在async function 內才可執行
    //4. 使用 try-catch 錯誤處理 取代.then .catch 語法

    // 正常執行區塊
    let output = {};
    let data1 = await readFilePromise("./models/data1.json");
    let data2 = await readFilePromise("./models/data2.json");
    let data3 = await readFilePromise("./models/data3.json");
    output["data1"] = data1;
    output["data2"] = data2;
    output["data3"] = data3;
    console.log(output);
  }catch(err){
      // 發生錯誤執行區塊
      console.log(err);
  };
};

main2();