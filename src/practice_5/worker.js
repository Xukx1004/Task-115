import Person from "./Person.js"

class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I have a job.`;
    }
}

module.exports = Worker;
