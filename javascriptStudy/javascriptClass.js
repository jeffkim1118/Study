class Person {
    name
    age
    gender

    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    
    introduce(){
        console.log(`Hi! ${this.name}. Age: ${this.age}, gender: ${this.gender}`)
    }

}

const kim = new Person('Kim', 25, 'Male');
kim.introduce();