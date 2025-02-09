// //Create A class User with 2 properties name & email. it also has
//  a method called viewData() that allow user to view website data


class User {
    constructor(name , email){
        this.name = name
        this.email = email
    }
    viewData(){
        console.log(`${this.name} ,${this.email}`)
    }
}

let Userdata = new User("TAYYAB ","TAYYAB@GMAIL,COM")
console.log(Userdata)