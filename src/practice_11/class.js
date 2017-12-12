// class Class {
//     constructor(number){
//         this.number = number;
//     }
  
//     getDisplayName(){
//         return `Class ${this.number}`
//     }

//     assignLeader(student){
//        if(student.klass.number === this.number){
//            return this.leader =  student;
//         }else{
//             console.log("It is not one of us.")
//         }
//     }

//     registerAssignLeaderListener(teacher){
//         return this.teacher = teacher;
//     }

//     registerJoinListener(teacher){
//         return this.teacher = teacher;
//     }

//     appendMember(student){
//         student.klass = this;
//         if(this.teacher !== undefined){
//             if(this.teacher.isTeaching(student)){
//                 console.log("I am "+ this.teacher.name+". I know "+ student.name +" has joined Class "+ student.klass.number +".")
//             }
//         }

//     }

//     isIn(student){
//         if(student.klass.number === this.number){
//             return ture;
//         }else{
//             return false;
//         }
//     }
// }

// module.exports = Class;

class Class {
    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }
    assignLeader(student){
        if(student.klass.number === this.number){
            this.leader = student;
            if(this.teacher){
                console.log("I am " + this.teacher.name +". I know "+ student.name+" become Leader of Class "+ this.number +".");
            }
        } else {
            this.leader = null;
            console.log("It is not one of us.");
        }
    }

    registerAssignLeaderListener(teacher){
        return this.teacher = teacher;
    }
    registerJoinListener(teacher){
        return this.teacher = teacher;
    }

    
    appendMember(student){
        student.klass = this;
        if(this.teacher !== undefined){
            if(this.teacher.isTeaching(student)){
                console.log("I am "+ this.teacher.name+". I know "+ student.name +" has joined Class "+ student.klass.number +".")
            }
        }

    }

    isIn(student) {
        if (student.klass.number === this.number) {
            return true;
        }else {
            return false;
        }

    }

}

module.exports = Class;

