function secondLarge(num1, num2, num3) {
    if ((num1 > num2) & (num1 < num3)) {
        console.log(`${num1} is second larger`);
    } else if ((num2 > num1) & (num2 < num3)) {
        console.log(`${num2}is second larger`);
    } else if ((num3 > num1) & (num3 < num2)) {
        console.log(`${num3} is second  larger`);
    } else {
        console.log("no one larger");
    }
}
console.log(secondLarge(10, 20, 30));

