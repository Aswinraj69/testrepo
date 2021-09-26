
//index    0   1   2   3   4    5   6   7
var arr = [10, 20, 12, 14, 13, 15, 11, 111]
//length   1    2   3   4   5   6   7   8

arr.sort((num1, num2) => num1 - num2)
var element = 13;
var low = 0, upp = arr.length - 1,

flag = 0;
while (low < upp) {
    mid = Math.floor((low + upp) / 2);
    //case1
    if (element < arr[mid]) {
        upp = mid - 1;
    //case2
    } else if (element > arr[mid]) {
        low = mid + 1;
    //case3
    } else if (element == arr[mid]) {
        flag = 1;
        break;
    }
}
if (flag == 0) {
    console.log("element not found");
} else {
    console.log("element found");
}