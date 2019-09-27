

var ssdeep = require("ssdeep.js");

let name = "billy bob"

let closeNames = [
    'Billy bob',
    'Billy bob sr',
    'Billy Boby sr',
    'Billy bob sr the third',
]


let hashArray = []

let hash1 = ssdeep.digest(name)
console.log("hash1: ",hash1)

for(let i =0; i < closeNames.length; i++){
    let name = closeNames[i]
    console.log("name: ",name)

    let hash2 = ssdeep.digest(name)
    console.log("hash2: ",hash2)

    //fuzzy hash analysis
    var score = ssdeep.similarity(hash1, hash2);
    console.log("score: ",score)
    hashArray.push([name,score])
}

console.log("hashArray: ",hashArray)
