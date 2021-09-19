upp=27;
low=3;
var flag =0;
function primeNum(num){
    for(let i=low; i<upp;i++){
        if(num%i==0){
            flag+=1;
            break;
        }
    }
    
}
console.log(flag==0?"prime":"not prime");
