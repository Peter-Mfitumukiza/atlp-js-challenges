function isPalind(str){
    let reversed = str.split('').reverse().join('');
    if (reversed.toLowerCase() != str.toLowerCase())
        return false;
    return true;
}

console.log(isPalind("madam"));