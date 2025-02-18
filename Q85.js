
//write a function that count accournec of object value pair
 function Obj(hastable1) {    
    let count = 0;     
    let hastable = { "x": 1
        
     };

    for (let keys in hastable) { 
        count += hastable1.filter(item => item === keys).length; // Count occurrences of the key
    }

    return count; // Return the total count
}   

console.log(Obj(["x", "y", "x", "y","y" ])); // Output: 2
