// 2. Convert a JSON Object into Query Parameters (URL Handling)
// You are working on a web app that needs to convert a
//  JavaScript//  object into a query string for an API request.

const Obj = {
    username :"Ali",
    age :45,
    work : "Ufc fighter"
}

let Change = new URLSearchParams(Obj).toString()
console.log(Change)