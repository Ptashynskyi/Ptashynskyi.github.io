function concatFirstNestedArrays(arr) {
    let concatArr = arr.reduce(function(a, b) {
        return a.concat(b);
    });
    console.log(concatArr)
}
concatFirstNestedArrays([
    [0, 1],
    [2, 3],
    [4, 5]
])