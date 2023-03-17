let arr1 = [1,2,3,4,5];
console.log(arr1.map(n=>n*2));

// function

let add1 = function(a,b){
  return a+b
};

console.log("add1(3,5) :",add1(2,3)); // 5
console.log("add1(6,-5) :",add1(6,-5)); // 1


// arrow function

let add2 = (a,b) => {
  return a+b;
};

console.log("add1(3,5) :", add2(3,5) );
console.log("add1(6,-5) :",add2(6,-5) );

// declear
let sayhello = (name) => { // function scope
  console.log("hihi");
  console.log("我是");
  console.log(name);
  console.log("~~~");


  let arr3 = [3,4,5,6,7];
  console.log( arr3.map(n => n*3) );
};

// use fuction 呼叫函式
sayhello("Jeff!!");

sayhello("Leo~~~");

//// function 特性介紹
let sayhello2 = (name2,age2) => {
  console.log("嗨嗨, 我是" + name2 + "," + "年紀是" + age2);
};

sayhello2("Jeff",18);

//// function 特性介紹 有return 才有輸出值 避免有 undefine
let sayhello2_with_output = (name2,age2) => {
  console.log("嗨嗨, 我是" + name2 + "," + "年紀是" + age2);
  return "下課囉！！！";
};

  sayhello2_with_output("Jeff!!",18);

  let msg1 = sayhello2("Jeff",18);
  console.log(msg1);

  let msg2 = sayhello2_with_output("Jeff",18);
  console.log(msg2);

  let arr3 = [1,2,3,4,5];
  // arr3.map( n => n*3 ) 等同於 下方函數
  let map3 = arr3.map((n) => {
    console.log(n);
    console.log("AAA");
    return n*3;
  });

  console.log("map3 :", map3);

  // 全域變數 區域變數

  let test1 = ()=>{
    // num1 為區域變數
    let num1 = 12; //若 num1 = 12; 則會變為全區域變數通常都不這麼寫
    return num1;
  };

  let test2= ()=>{
    let num2 = 15; // let num2 是區域變數
    return num2;
  };

  let test3= ()=>{
    let num3 = 21;

    return console.log("num3 :", num3);
  };

  // console.log也是屬於Function 因為是顯示()內東西
  console.log(test1() ); // test1 為全

  // console.log("num2 :", num2); //報錯 因為num2 為local


  //var / let / const

//var : function scope, value可以任意更改
//let : block scope, 區塊 value可以任意更改
//const : block scope,區塊 value不可任意更改

// 主流=>let const

let test4 = () =>{
  let num4 = -15;
  // var message ;
  let message ; // block scope

  const message1 = "123"; //const不能變喔

  if(num4 >0){
    // var message = "正數"; // function scope
    // console.log("正整數！！");
    // let message = "正數"; 則會報錯 以下修正 // block scope 只有在這中括弧作用
    message = "正數！";
  }else{
    // var message = "負數";
    // console.log("負數!!");
    // let message = "負數"; 則會報錯 以下修正
    message = "負數";
  };
  console.log(message);
  console.log(message1);
};

test4();