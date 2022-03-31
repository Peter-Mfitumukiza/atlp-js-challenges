function reverse(arr){
    let end = arr.length-1;
    let start = 0;
    while(start < arr.length/2){
        let temp = arr[end];
        arr[end] = arr[start];
        arr[start] = temp;
        end-=1;
        start+=1;
    }
    return arr;
}

console.log(reverse([12,13,14,15,20]));