var products = [
    [100, "oreo", 40, 50],
    [101, "fifty-fifty", 20, 60],
    [102, "borbourne", 40, 0],
    [103, "treat", 30, 10],
    [104, "arrowroot", 30, 0],
    [105, "moms-magic", 45, 10],

]



//highest price
var highest_price = products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
console.log(highest_price);

var low_price=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
console.log(low_price);

var search=products.find(item=>item[1]=="treat")
console.log(search);

//some()

var some_product=products.some(item=>item[2]>10)
console.log(some_product);