class Person{
    constructor(name = 'Anonymous', age = 0){
        this.name = name
        this.age = age
    }
    getGreeting(){
        return `Hi! I am ${this.name}.`
    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person{
        constructor(name, age, major = 'Undecided'){
            super(name, age);
            this.major = major;
           
        }

        hasMajor(){
            return !!this.major
        }

        getDescription(){
            return `${this.name} has major ${this.major}`
        }
}

class Traveler extends Person{

    constructor(name, age, homeLocation = ''){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    
    hasLocation(){
        return !!this.homeLocation;
    }
    getGreeting(){
        let description = super.getGreeting();
        if(this.hasLocation()){
            description += ` I am visiting from ${this.homeLocation}`
        }
        return description;
    }
    
}

const traveler = new Traveler('Amit', 45, 'India');
console.log(traveler.getGreeting());

const student1 = new Student('Max', 26, 'Computer Science');
console.log(student1.getDescription());

