function countOccurence(num, arr){
    let occurences = 0;
    for(let i=0; i<arr.length; i++){
        if(num == arr[i])
            occurences++;
    }
    return occurences;
}

function hasMajorityElem(arr){
    let halfSize = arr.length/2;
    for(let x=0; x<arr.length; x++){
        if(countOccurence(arr[x], arr) > halfSize)
            return true
    }
    return false;
}

console.log(hasMajorityElem([3,1,3,4,4,5,3,5,3,3,3,6,3]));
console.log(hasMajorityElem([3,1,3,4,4]));