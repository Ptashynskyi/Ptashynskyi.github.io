function minMax(arr) {
    arr.sort(function(a, b) { return a - b });
    console.log('min:' + arr[0] + 'max:' + arr[arr.length - 1]);
}
minMax([1, 4, 8, 2, 20]) // { max: 20, min: 1 }
    //A function that returns average of numbers in array.