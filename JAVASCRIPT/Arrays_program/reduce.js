var arr=[2,3,4,5,6]

var total=arr.reduce((num1,num2)=>num1+num2)
console.log("total=",total);
                                         //true //false
var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log("max=",max);

var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log("min=",min);