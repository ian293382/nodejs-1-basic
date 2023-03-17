let obj4 = {
    "name" : "jeesevv" , // key-value
    "age" : 20 ,
    message : "嗨嗨",
    today : "星期六",
    };

console.log(obj4);

// 取值
let name2 = obj4["name"];
let age2 = obj4["age"]; // 透過 key 來抓取資料
console.log("name2 :", name2);
console.log("age2 :", age2);

let day = obj4["today"];

let today = "today"; // 宣告 today 為age 字串
let today2 = obj4[today]; // 抓obj4 key=today 的ｖａｌｕｅ 資料

// 用 today2 和 day 比較
console.log("today2 :", today2);
console.log("today :", day);

obj4["scores"] = [95,100,77];
obj4["age"] = 30 ;
console.log("new obj4 :", obj4);



// 修改

obj4["name"] = "keven" ;
obj4["name"] = 30 ;
console.log("新的obj4 :", obj4);

//Object 為保留值
Object.keys(obj4);

// data
let data = {
  "name" : "Jeff",
  "height" : 170,
  "weight" : 65,
  "age" : 26,
  "class" : "A-",
  "interest" : ["喝酒,爬山,寫程式"]
};

console.log("a. data :", data );

console.log("b. :", "嗨嗨,我是",data["name"],"階級為",data["class"] );
// 此為 let message = "嗨嗨,我是" + data["name"],"階級為" + data["class"]

data["height"] = 180;

console.log("b-1 :嗨嗨，我是" + data["name"] + ",階級為" + data["class"] + "其中身高為" + data["height"]);

console.log("c :",data);

data["interest"].push("彈吉他");

console.log("d. :", data);

console.log("-".repeat(50));

// array with object

let data3 = [
  { memNO : 1001, name : "jeff", money : 1000},
  { memNO : 1002, name : "leo", money : 1000},
  { memNO : 1003, name : "jenny", money : 900},
  { memNO : 1004, name : "holy", money : 800},
  { memNO : 1005, name : "foo", money : 700},
  { memNO : 1006, name : "bar", money : 230},
]

// a取出名字資料的array
// b取出memNO 構成的array

let result2 = data3.map( element => element["name"]);

console.log("result2 :", result2);

// 變成全部ABCD
let result4 = data3.map(element => "ABCD");
console.log("resul4 :", result4);

// c money >= 900 memNo

let result5 = data3.filter( element => element["money"] >= 900)
                   .map( element => element["memNO"]);

console.log("result5 :", result5);

console.log("-".repeat(50));

let studentScores = [
  { name: "Jeff" , age: 18, scores : [95,88,100] },
  { name: "Leo" , age: 22, scores : [90,97,98] },
  { name: "Holy" , age: 25, scores : [75,68,90] },
  { name: "Keven" , age: 33, scores : [77,65,32] },
  { name: "Jenny" , age: 20, scores : [63,82,91] },
  { name: "Elle" , age: 31, scores : [100,73,83] },
]

// 取得ａｇｅ >= 30 array

let Name1 = studentScores.filter(element => element["age"] >= 30)
                         .map(element => element["name"]);
console.log("name :", Name1);

let scores1 = studentScores.filter(element => element["scores"][0] + element["scores"][1] + element["scores"][2] >= 250)
                           .map(element => element["name"]+ "-" + element["age"]);
console.log("scores1",scores1)