// Which gave highest value
const Obj = {
 person : 70 ,person2 : 49 ,person3 :100 ,    person5 : 2
}
let smallest  = Object.keys(Obj)[0]

for(let keys in Obj){
    if(Obj[keys]  > Obj[smallest]){
        console.log(smallest = keys)
    }}