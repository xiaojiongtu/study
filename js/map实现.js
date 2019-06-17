function myMap(fn,context) {
    let arr=Array.prototype.slice.call(context)  //将具有length属性的对象转换成数组
    let mapArray=[];
    for (let i=0;i<arr.length;i++){
     if(!arr.hasOwnProperty(i)) continue;
        mapArray.push(fn.call(context,arr[i],i,this))
    }
    return mapArray
}

let arr=[2,4,5]

let res=myMap(item=>item+2,arr);
console.log(res);