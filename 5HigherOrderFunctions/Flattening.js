

function flatten(arr) {
    let result = []
    arr.forEach(subarr => {
        subarr.forEach(element => {
           result.push(element)
       }); 
    });
    return result
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));
arrays = [[1, 2, 3],  [6]];
console.log(flatten(arrays));
arrays = [[], [], []];
console.log(flatten(arrays));
arrays = [[1, 2, 3]];
console.log(flatten(arrays));
