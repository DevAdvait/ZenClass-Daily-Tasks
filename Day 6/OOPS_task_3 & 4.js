// Write a “person” class to hold all the details.

class Person {
    constructor(fname,lname,number,email,distance=0,costPerKm = 10){
        this.fname = fname;
        this.lname = lname;
        this.number = number;
        this.email = email;
        this.distance = distance;
        this.costPerKm = costPerKm;
    }
}

// write a class to calculate the uber price.

class UberPrice extends Person{
    helloStatement(){
        return (`Hello ${this.fname} ${this.lname}!\n`);
    }
    confirmDetails(){
        return (`First Name: ${this.fname} \
        Last Name: ${this.lname}\
        Number: ${this.number} \
        Email: ${this.email}\n`);
    }
    getPrice(){
        return (`${this.fname} your Uber Total will be Rs.${this.distance*this.costPerKm} for ${this.distance} Kms.`)
    }
}

let personNumber1 = new UberPrice("Barney","Stinson",9999888222,"legen___dary@awesome.com",200);

console.log(personNumber1.helloStatement()); //
console.log(personNumber1.confirmDetails()); //
console.log(personNumber1.getPrice()); // 