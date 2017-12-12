class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    
    introduce(){//对象方法
       return `My name is ${this.name}. I am ${this.age} years old.`;
    };
}
let person = new Person(1,"Tom");
module.exports = Person;

