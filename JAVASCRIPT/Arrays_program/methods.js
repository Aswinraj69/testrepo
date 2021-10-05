var products = [
    [100, "oreo", 40, 50],
    [101, "fifty-fifty", 20, 60],
    [102, "borbourne", 40, 0],
    [103, "treat", 30, 10],
    [104, "arrowroot", 30, 0],
    [105, "moms-magic", 45, 10],

]

var product=products.map(item=>item[1]).forEach(names=>console.log(names))

var price = products.filter(item=>item[2]>30).forEach(item=>console.log(item))

var price = products.filter((item)=>item[2]>30).forEach(item=>console.log(item))

// map
// filter
// sort
// reduce
// find
// some
// forEach
// reduceRight