// import Person from "./person.js"
// import Class from "./class.js"
// import Student from "./student.js"

// let studentJerry = new Student;
// let klass = new Class;
// class Teacher extends Person{
//     constructor(name,age,klass){
//         super(name,age);
//         this.klass = klass; 
//     }
//     introduce(){
//     if(this.klass){
//         return `${super.introduce()} I am a Teacher. I teach Class ${this.klass.number}.`
//     }else{
//         return `${super.introduce()} I am a Teacher. I teach No Class.`;
//     }
//     }
//     introduceWith(studentJerry){
//         if(studentJerry.klass === this.klass){
//             return `${super.introduce()} I am a Teacher. I teach ${studentJerry.name}.`
//         }
//         else
//         {
//             return `${super.introduce()} I am a Teacher. I don't teach ${studentJerry.name}. `
//         }
//     }
// }

// module.exports = Teacher;

import Person from "./person.js"

class Teacher extends Person{
    constructor(name,age,klass){
       super(name,age);
        this.klass=klass;
    }
   
    introduce(){
        if(this.klass){
            return `${super.introduce()} I am a Teacher. I teach Class ${this.klass.number}.`;
        }else{
            return `${super.introduce()} I am a Teacher. I teach No Class.`;
        }
    }
    introduceWith(studentJerry){
        
      if(studentJerry.klass===this.klass){
        return `${super.introduce()} I am a Teacher. I teach ${studentJerry.name}.`;
      }else{
        return `${super.introduce()} I am a Teacher. I don't teach ${studentJerry.name}.`;
      }

    }

}
module.exports = Teacher;


