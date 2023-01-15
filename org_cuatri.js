class Student{
    constructor(name, status, quarter){
        this.name = name;
        this.status = status;
        this.quarter = quarter;
    }
    print(){
        console.log(`Name: ${this.name}. Actual status: ${this.status}. Actual quarter: ${this.quarter}`);
    }
    getName(){
        return this.name;
    }

    getStatus(){
        return this.status;
    }

    getQuarter(){
        return this.quarter;
    }
}


class Quarter{
    constructor(subjects,number_quarter){
        this.subjects = subjects
    }
}

class Subject{
    static group = []
    constructor(number_students,number_quarter){
        this.number_quarter = number_quarter
        this.number_students = number_students
    }

    createGroup(studentsList){
        for(let i=0;i<studentsList.length;i++){
            if(studentsList.length < 5){
                return console.log("Not enough students to create group");
            }
            if(Subject.group.length === 8){
                groupsList.push(group);
                Subject.group.length = 0;

            }
            Subject.group.push(studentsList[i])
        }
        if(Subject.group.length > 4 && Subject.group.length < 9  ){
            groupsList.push(Subject.group);
        }else{
            return console.log("Not enough students to create group");

        }
    }
}


const groupsList = []
const studentsList = []
