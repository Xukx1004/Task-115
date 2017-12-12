class Class {
    constructor(number){
        this.number = number;
    }
  
    getDisplayName(){
        return `Class ${this.number}`
    }
    assignLeader(student){
       if(student.klass.number === this.number){
           return this.leader =  student;
        }else{
            console.log("It is not one of us.")
        }
    }
    appendMember(student){
        if(student){
            return student.klass = this;
        }
    }
}

module.exports = Class;

// class Class {
//     constructor(number) {
//         this.number = number;
//     }

//     getDisplayName() {
//         return "Class " + this.number;
//     }

//     assignLeader(student){
//         if(student.klass.number === this.number){
//             this.leader = student;
//         } else {
//             this.leader = null;
//             console.log("It is not one of us.");
//         }
//     }

//     appendMember(student){
//         student.klass = this;
//     }
// }

// module.exports = Class;