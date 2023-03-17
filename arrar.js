let arr = [1, 2, 3] // 一個一個資料值 也就是 element 任何資料型別都可以包涵array

// 取值
let a = arr[2];
console.log(a);

// 令值
arr[3] = "test"; arr[0] = false;

console.log(arr)

// 新增
arr.push(123)
console.log(arr)

console.log("-".repeat(50));

let arr4 = [100, 80, 95, 75, 80];

let b = arr4[0];
let c = arr4[2];

console.log("a :", a);
console.log("b :", b);
console.log("c :", c);

arr4[4] = 1000;  // arr4 為 index  index=4得值修改為 1000
console.log(arr4);


//新增 arr4.push

arr4.push(27);
arr4.push(32);
arr4.push(64);
arr4.push(12345);
console.log(arr4);

// remove
arr4.pop(-1);
console.log(arr4);

// 可以看出有多少資料數量
console.log( "Array 長度 :", arr4.length); // array 內建的 [屬性] property

console.log("-".repeat(50));


// 常用功能 map filter
let arr5 = [1,2,3,4,5];
console.log("arr5 :", arr5);

let map1 = arr5.map( n => n*2); // 將每一個函數*2

console.log("map1 :", map1);

let map2 = arr5.map( n => n**3 ); // 將每一個元素三次方

console.log("map2 :", map2);

// filter

let filter1 = arr5.filter( n => n >3 );
console.log("filter1 :", filter1);

let filter2 = arr.filter( n => n%2 === 0);
console.log("filter2 :", filter2);

let filter3 = arr5.filter( n => n > 3 );
console.log("filter3 :", filter3);

let map3 = arr5.map( n => n*3 );
console.log("arr5 :", arr5);
console.log("map3 :", map3);

let map4 = map3.map( n => n-1 );
console.log("map4 :", map4);

let filter4 = map4.filter( n => n%2 === 1 ); // odd判別
console.log("filter4 :", filter4);

// 可以做組合招數 FP function chain 同樣 filter4 結果

let result1 = arr5.map( n => n*3)
                 .map( n => n-1)
                 .filter( n=> n%2 ===1 );
console.log("result :", result1)
