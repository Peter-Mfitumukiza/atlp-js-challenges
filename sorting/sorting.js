function isPrime(num){
    if(num < 2)
        return false;

    for(let x=2; x<=num/2; x++){
        if(num%x == 0)
            return false;
    }
    return true;
}

function sort(array){
    let sorted = [];
    for(let i=0;i<array.length;i++){
        let maxIndex = i;
        for(let j=i+1; j<array.length; j++){
            if(array[j]>array[maxIndex]){
                maxIndex = j;
            }
        }
        if(array[i]!= array[maxIndex]){
            let temp = array[i];
            array[i] = array[maxIndex];
            array[maxIndex] = temp;
        }
        if(!isPrime(array[i])){
            sorted.push(array[i]);
        }
    }
    return sorted;
}

console.log(sort([1,2,3,4,5,6,7,8,9,13]))