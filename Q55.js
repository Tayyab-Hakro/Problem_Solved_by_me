function HashPassword(Hash){
Hash = new RegExp(/\$\w+/g)
    return Hash; // Output: ["123"]
}

console.log(HashPassword("tayyab321"))



