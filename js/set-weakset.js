const set=new Set([2,3,4,2,2,6,7]);
console.log(set instanceof Array);//false
  let setArr=[...set]   //转成数组
  console.log(setArr);
console.log(setArr instanceof Array);//true



