function average(arr) {
    let sum = arr.reduce(function(a, b) { return a + b; }, 0);
    let avar = sum / (arr.length);
    console.log(avar);
}
average([1, 4, 2])