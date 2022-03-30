let sample = [ "Patrick Wayne, 32", "Eric mimi, 21", "Dodos deck, 21" ];

function generateObject(arr){
    let people = {};
    for(let i=0; i<arr.length; i++){
        let names = arr[i].split(",")[0];
        let age = parseInt(arr[i].split(",")[1]);
        people[names.split(" ")[0]]={
            "second-name": names.split(" ")[1],
            "age": age
        }
    }
    return people;
}

console.log(generateObject(sample));