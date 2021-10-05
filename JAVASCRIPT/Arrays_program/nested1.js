// print number of items in shop
// print number of available items
// print all product names only

var products = [
    [100, "oreo", 40, 50],
    [101, "fifty-fifty", 20, 60],
    [102, "borbourne", 40, 0],
    [103, "treat", 30, 10],
    [104, "arrowroot", 30, 0],
    [105, "moms-magic", 45, 10],

]

var product_count = 0;
for (let product of products) {
    var product_details = products.map((pro) => pro[0])
    product_count++
}
console.log("products=", product_count);


var available_count = 0;
for (let product of products) {
    if(product[3]>0){
        var available_items = products.map((pro) =>pro[3])
        available_count++
    }
}
console.log("availabe items=", available_count);



var product_names=products.map((pro)=>pro[1])
console.log("product names=" , product_names);


var out = products.filter((item)=>item[3]==0).map(item=>item[1])
console.log(out);

// var offer = products.filter((item)=>item[3]>50).map([item=>[item[1],item[2]-5]    
// console.log(offer);
