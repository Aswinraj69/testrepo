for (let row = 0; row < 12; row++) {
    let str = " ";
    for (let space = 0; space < (12 - row - 1); space++) {
        str += " "
    }
    for (let col = 0; col < (row + 1); col++) {
        str += "* "
    }
    console.log(str);
}