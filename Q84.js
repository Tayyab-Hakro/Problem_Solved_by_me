// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }

var map = function(arr, fn) {
    for(let  i = 0 ; i<arr.length ; i++){
        arr[i] = fn(arr[i], i);
}
return  arr
};
console.log( map(arr = [1,2,3], fn = function plusone(n) { return n + 1; }))
