//mAKE A uSER class and make it child
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Admin extends User {
    editData(newName, newEmail) {
        this.name = newName;
        this.email = newEmail;
        console.log(`Updated Data: Name - ${this.name}, Email - ${this.email}`);
    }
}

const user1 = new Admin("Alu", "alluargun@email.com");
console.log(user1); // Before updating

user1.editData("Allu Arjun", "allu@newemail.com"); // Updating user dat
a
console.log(user1); 
