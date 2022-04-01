function isPalind(str){
    let reversed = "";
    for(let i=str.length-1; i>=0; i--){
        reversed += str[i];
    }
    if (reversed.toLowerCase() != str.toLowerCase())
        return false;
    return true;
}

console.log(isPalind("madam"));