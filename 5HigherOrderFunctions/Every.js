function every(arr, test) {
    let noneIsFalse = true
    arr.forEach(element => {
        if (!test(element)) noneIsFalse =false
    });
    return noneIsFalse
}


console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
