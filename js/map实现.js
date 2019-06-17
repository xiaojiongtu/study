function myMap(fn,context) {
    let arr=Array.prototype.slice.call(context)  //将具有length属性的对象转换成数组
    let mapArray=[];

    for (let i=0;i<arr.length;i++){
     if(!arr.hasOwnProperty(i)) continue
    }
}