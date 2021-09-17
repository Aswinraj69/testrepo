//    let rev = 0;
//    let num = 123;
   
//    rev = Number(String(num).split('').reverse().join(''));
   
//    console.log("Reverse number : "+rev); 



//mod
//floor


var num=123;//123!=0
var res="";

while(num!=0){
    //mod
    let digit=num%10; //digit=123%10=3 digit=12%10=2
    res+=digit**3 //3 2 1
    num=Math.floor(num/10) //123/10=12 12/10=2

}
console.log(res);