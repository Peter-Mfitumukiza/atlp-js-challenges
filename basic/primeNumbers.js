function isPrime(num){
    if(num < 2)
        return false;

    for(let x=2; x<=num/2; x++){
        if(num%x == 0)
            return false;
    }
    return true;
}

function getPrimes(array){
    let primeArray = [];
    for(let i=0; i<array.length; i++ ){
        if(isPrime(array[i])){
            primeArray.push(array[i])
        }
    }
    return primeArray;
}

console.log(getPrimes([0,1,4,2,3,12,9,8,11,13,29]));