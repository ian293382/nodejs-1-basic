
  for (let i = 0 ; i < 11 ; i++){
    // if(i<6){
    //   console.log("*".repeat(6-i));
    // }else{
    //   console.log("*".repeat(i-4));
    // };
    // 上述可省略
    if(i<6) console.log("*".repeat(6-i));
    else console.log("*".repeat(i-4));
  };


  console.log("-".repeat(50));

  // 字詞統計 爬蟲需求 word count
  let data =["a","b","c","c","c","a","d","b","a","c","小花妖"];
  // 請統計字母並且以 object表示 { "a":3, "b":5, "c":3,}
  // 並且要自動計算數字
  let result1 = {}

  for(let i=0 ; i < data.length ; i++){
    let key = data[i];
    console.log(key);
    // 檢查元素是否在resulet裏面 如果有有 value +=1,
    // 沒有的話就是新增一組key-value pair
    if(key in result1){ // key如何能判別在 object裡面呢？
      result1[key] += 1; // 讓value ＋1
    }else{
      result1[key] = 1 ; // 新增值給他
    };
  };

  console.log(result1);

  /// 檢查key 是否存在於object 中 方法一
  let data2 = { "name" : "Jeff", "age" : 18 };
  console.log("name" in data2);
  console.log("age" in data2);
  console.log("message"in data2);

  // 習慣以下面為主 方法二
  console.log(data2["name"]);
  console.log(data2["age"]);
  console.log(data2["message"]); // undefined意思是 key值不存在; 這用於大資料去找很方面

  // 優化上一題
  let result2 = {}

  for(let i=0 ; i < data.length ; i++){
    let key = data[i];
    console.log(key);

    if(result2[key]){ // 取代 key in result1 但 key 內部沒有就會有undefined
      result2[key] += 1; // 讓value ＋1
    }else{ // 0 null undefined => 視為 false
      result2[key] = 1 ; // 新增值給他
    };
  };

  console.log(result2);

  // 九九乘法表
  // 並且排列成方陣格式 1x1=1 1x2=2 1x3=3

  // for(let m = 1 ; m < 10 ; m++){
  //   for(let n = 1; n < 10 ; n++){
  //     // console.log(m,n);
  //     console.log(`${m}x${n}=${m*n}`)
  //   };
  // };

  // 顯示方陣 九成九
  // let message= "", 先用小字串
  // 合併大字串 “1x1=1 .. 1x9=9


  for(let i = 1 ; i<10 ; i++){
    let message = "";
    for(let j = 1 ; j <10 ; j++){
      // 修正 行列數 對齊
      // let space = "";
      // if(i*j <10) space = "  ";
      // else space = " ";
      let space = (i*j <10) ? "  " : " " ; // 三元運算符號 上式縮寫版

      message += `${i}*${j}=${i*j}${space}`;
    };

    console.log(message);
  }; // 盡量不要用到雙重回圈

  // 三元運算子
  let a = -123;
  let msg2 = a>0 ? "正數" : "負數"  ;
  console.log(msg2);

  // 費氏數列 1,1,2,3,5,8,13,21 設計n 費氏數列要跑到那個值
  // f(3)=2, f(7)=13;
  // 建議先宣告一個變數
  let fibonacci = (n) => {
    if(n === 1 || n ===2)
      return 1;
    let r = 0 ;
    let a1 = 1;
    let a2 = 1;
    for(let i = 0 ; i < n-2; i++) {
      // n = 3 執行一次, n = 4 跑兩次 ...所以只要跑 n-2 次

      r = a1 +a2;

      a1 = a2; // 移動了a1 , 此時 a1 為新的a1 值
      a2 = r ; // 移動了a2 此時 a2 為新的 a2 值
    };

    return r;
  };

  for(let k=1 ; k<20 ; k++){
    console.log(fibonacci(k));
  };

  // 最後 while-loop
  // 記得設定終點
  let cnt = 0;
  let limit = 10;

  while(true){
    cnt +=1 ;

    console.log("目前共執行"+ cnt + "次！");

    if(cnt === limit){
      break;
    };
  };
  console.log("while loop 結束");

  // let cnt1 = 0; 比較少用
  // while(cnt1 <10 ){

  //   console.log(`目前共執行 ${cnt1} 次！`);
  //   cnt1 ++;
  // };

  // 題目1
  // 1~49可重複抽六個號碼牌
  // 如果不重複抽到數字怎做
  // Math是一個數字class 類別
  console.log(Math.random() ); // 取 0~1之間 的小數;
  console.log(Math.random()*49 ); // 0~49 之間的小數；
  console.log(Math.ceil( Math.random()*49 ) ); // 1~49的整數(ceil無條件進位)


  let nums = []; // 1~49之中 可重複抽取 6個數字 出來

  let cnt1 = 1;
  let limit1 = 6;
  // 如何寫進nums
  while(nums.length <6){
    let n = Math.ceil( Math.random()*49 );
    // nums.push(n);
    // 檢查是否重複
    if (!(nums.includes(n))){
      nums.push(n)
    }else{
      console.log(`${n} 重複了`, nums);
    }

  };

  console.log(nums.sort( (a,b)=> a-b )); // sort 用法


  //// includes
  console.log( [1,2,3,4,5].includes(3) );
  console.log( [1,2,3,4,5].includes(5) );
  console.log( [1,2,3,4,5].includes(0) );
  ////
