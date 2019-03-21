function sumAll(n) {
    return (n != 1) ? n + sumAll(n - 1) : 1;
}
console.log(sumAll(2)); // 3
console.log(sumAll(4)); // 10