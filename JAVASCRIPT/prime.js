//program to find given number is prime or not
// if prime  2 factor(1 or same num)  //div by only 1 or 2
var num=3;
var flag=0;
for(let i=2; i<num;i++){
    if(num%i==0){
        flag+=1;
        break;
    }
}

console.log(flag==0?"prime":"not prime");


//num=2
//2+22=24