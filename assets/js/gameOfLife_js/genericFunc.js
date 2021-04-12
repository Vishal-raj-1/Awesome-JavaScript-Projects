const make2dArray = (rows, cols) => {
    let arr = new Array(rows);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(cols);
    }
    return arr;
}

const ran = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max - min) + min);
}