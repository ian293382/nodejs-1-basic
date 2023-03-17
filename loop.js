let arr1 = [97,100,85,77,89,77,65,77];
// let sum1 = arr[0] + arr[1] ... 很難看

console.log("start!!!");

// for(let i = 0 ; i <= 10 ; i ++){ // i++ 為跳躍極巨 每一跳多一
//   console.log(i);
// };

// for(let j=0 ; j<6 ; j=j+1){ // 右邊j為新變數
//   console.log("第"+ j + "次執行");
// };

// for(let k = 11 ; k>=0 ; k = k-2 ){
//   console.log("嗨嗨嗨嗨");
//   console.log(k);
// };

// 如何矩陣相加呢
// 由於 arr.length = 8 但陣列只有元素 0~7 第八個會報錯所以 -1
let sum1 = 0; // 負責加總
for(let i=0 ; i <= arr1.length -1 ; i = i+1){
  // console.log(arr1[i]);
  sum1 = sum1 + arr1[i];
};
console.log("arr1 總和:", sum1);
console.log("End!!!");

// 第一個 1+2+...100

  let sum3 = 0;
  for(let n = 1 ; n <=100; n = n +1){
    // sum3 = sum3 + n;
    sum3 += n; //簡寫
  };

  console.log(sum3);

// 第二個印出 **（repeat) * = 6,5,4,3,2,1
  for(let n = 6 ; n > 0; n--){
    console.log("*".repeat(n));
  };

let name1 = "Jack!";
  for(let n = 0 ; n <= name1.length -1 ; n++){
    console.log(name1[n].repeat(name1.length - n));
  };

// 第三個寫出一個  name = "Jack!",避且變成
// JJJJJ
// AAAA
// CCC
// KK
// !