var arr = [2, 3, 4, 5, 6, 7, 8]

var op = []
for (let num of arr) {
    if (num < 5) {
        op.push((num - 1))
    } else if(num>5){
        op.push((num + 1))
    }else {
        op.push(num)
    }
} console.log(op);

//  var op = arr<5?op.push((arr-1)):arr>5?op.push((arr+1)):op.push(arr)
//  console.log(op);