function reverse(arr){
    let reversed = [];
    for(let i = arr.length-1; i>=0; i--){
        reversed.push(arr[i]);
    }
    return reversed;
}

console.log(reverse([12,13,14,15]));