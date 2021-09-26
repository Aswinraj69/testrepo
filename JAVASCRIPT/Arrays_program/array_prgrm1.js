//datastructure
//for organizing data
//it is possible to store same and diff type of data/object
//size is not fixed

var expenses =[10000,20000,30000,440000]
//console.log(expenses[1]);

// for(let i=0;i<expenses.length;i++){
//     console.log(expenses[i]);
// }
// var total=0;
// for(let amount of expenses){
//     console.log(amount);
//     total=total+amount;
//     //total+=amount;
// }
// console.log(total);
//print less than 15000

for (let amount of expenses){
    if(amount<15000){
        console.log(amount);
    }
}

// for(let amount of expenses){
//     console.log(amount<15000?amount:"");
// }

//add 3000 rs more with feb expenses
expenses[1]+=3000;
expenses[0]=expenses[0]+200;
console.log(expenses);
//insreting an element of end position of an array
expenses.push(220000)
console.log(expenses);

//remove an item from end pop()
expenses.pop()
console.log(expenses);