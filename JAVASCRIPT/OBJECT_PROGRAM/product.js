var products={
    p_code:100,name:"pro1",price:250,aval_qty:50
}
//print name
console.log(products.name);

//update stock as current stock+30
products.aval_qty+=30
console.log(products);

//chk discount key



console.log("discount" in products);

//add 10%

products.discount="10%"
console.log(products);
