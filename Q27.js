// Write a function to merge two objects deeply

function mergeToObject(Obj1 , Obj2){
    return {...Obj1 , ...Obj2}
}
console.log(mergeToObject({fullname : "Tayyab"} ,{name :"ali"}))