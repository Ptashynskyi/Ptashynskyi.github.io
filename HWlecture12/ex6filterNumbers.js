function filterNumbers(arr, maxNumber) {
    let arr1 = [];
    for (let n = 0; n < arr.length; n++) {
        if (arr[n] <= maxNumber) {
            arr1.push(arr[n]);
        }
    }
    console.log(arr1);
}
filterNumbers([1, 4, 8, 1, 20], 5) // [1, 4, 1]