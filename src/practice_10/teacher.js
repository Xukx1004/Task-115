import Person from "./person.js"

class Teacher extends Person{
    constructor(id,name,age,klasses = []){
       super(id,name,age);
        this.klasses = klasses;
    }
   
    // introduce() {
    //     let i = super.introduce();
    //     i += ` I am a Teacher.`;
    //     let l = this.klasses.length;
        // if(l === 0){
        //     i += ` I teach No Class.`
        // }else if(l === 1){
        //     i += ` I teach Class `;
        //     // for(let klass of this.klasses){ //标点符号不符合
        //     //     i += `${klass.number}.`;
        //     // }
        //     i += `${klasses[i].number}.`;
        //     }else{
        //         for(let i= 0;i<l;i++)
        //             i += `${klasses[i].number}, `;
        //         }
    //     if(l === 0){
    //         i += ` I teach No Class.`
    //         }else {
    //             i += ` I teach Class `;
    //             for(let klass of this.klasses){
    //             if(this.klasses.indexOf(klass) === (this.klasses.length-1)){
    //                  i += `${klass.number}.`;
    //                 }else {
    //                      i += `${klass.number}, `;
    //                         }
    //                     }
            
    //     return i;
    // }
// }
        introduce() {
            let information = super.introduce();
            information += ` I am a Teacher.`;
            if(this.klasses.length === 0){
                information += ` I teach No Class.`
            }else {
                information += ` I teach Class `;
                for(let klass of this.klasses){
                    if(this.klasses.indexOf(klass) === (this.klasses.length-1)){
                        information += `${klass.number}.`;
                    }else {
                        information += `${klass.number}, `;
                    }
                }
            }
            return information;
        }

}
module.exports = Teacher;

