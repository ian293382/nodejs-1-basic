let a = 12;
if(a>0) {
  console.log("a is positive!!");
}else{
  console.log("a is negative!!");
};

let b = 0;
if(b>0) {
  console.log("b 為正數!!");
} else if (b === 0){
  console.log("b 為 零");
} else {
  console.log("b 為負數");
};

console.log("1 == 1 :", 1 == 1);
console.log('1 == "1" :', 1 == "1");
console.log("1 == true :", 1 == true );

// 寫資料判別建議用 === 強型別判斷連資料型別也要一致 通常都是用強型別

console.log( 12%2 === 0 && 3>7); //關係運算子 第二條不成立 false

// if - else
let number = 123;
let type;
if (number>100){
  type = "丁組";
} else if ( number < 100 && number > 50){
  type = "丙組";
} else if ( number < 50 && number > 0){
  type = "乙組";
} else {
  type = "甲組";
};

console.log("您的組別事 :", type);

// 禁止偷雞
let age = 32;
let gender = "F";

if (age >= 30 && gender === "M"){
  console.log("您的消費金額為一千元");
} else if ( age < 30 && gender === "M"){
  console.log("您的消費金額為七百元");
} else if (gender === "F"){
  console.log("您的消費金額為五百元");
};

// 建議把條件分別拆開
