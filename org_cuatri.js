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
        this.number_quarter = number_quarter
    }
}

class Subject{
    static group = []
    constructor(subject_name,number_quarter){
        this.number_quarter = number_quarter
        this.subject_name = subject_name;
    }

    createGroup(studentsList){
        if(studentsList.length < 5){
            return console.log(`Not enough students to create group to create a new group of ${this.subject_name}`);
        }
        for(let i=0;i<studentsList.length;i++){
            if(Subject.group.length === 8){
                groupsList.push({"Subject" :this.subject_name, "Group":Subject.group});
                Subject.group.length = 0;
                
            }
            if(studentsList[i].getStatus()){
                Subject.group.push(studentsList[i])
            }
        }
        if(Subject.group.length > 4 && Subject.group.length < 9  ){
            groupsList.push({"Subject" :this.subject_name, "Group":Subject.group});
            // groupsList.push(Subject.group);
        }else{
            return console.log(`Not enough students to create group to create a new group of ${this.subject_name}`);

        }
    }
}


let groupsList = []
let studentsList = [new Student("Manuel",true,2), new Student("Wing",true,3), new Student("Gerardo",true,3),new Student("Cesar",true,1),new Student("Wlie",true,1), new Student("José",true,1),new Student("Esteban",true,1), new Student("Sebastian",true,1),new Student("Lucia",false,1),new Student("Sebastian",true,3), new Student("Lucia",true,3), new Student("Iván",true,3), new Student("Armando",true,3), new Student("Luisa",true,3), new Student("Luis",true,3), new Student("Carmen",true,3), new Student("Alejandro",true,2),new Student("Fernando",true,2), new Student("Jhonatan",true,2),new Student("Brandom",true,2),new Student("Carolina",true,2), new Student("Daniel",true,2), new Student("César",true,2), new Student("Jimena",true,2), new Student("Alfredo",true,2), new Student("Susana",false,2), new Student("Mónica",false,2), new Student("Christel",true,2), new Student("Chritopher",true,2), new Student("Santiago",true,2), new Student("Fernanda",false,1), new Student("Valeria",true,1)];

console.log(studentsList.length)

let quarter1 = new Quarter([new Subject("Programación I",1),new Subject("Redes I",1)], 1);
let quarter2 = new Quarter([new Subject("Programación Orientada a Objetos",2),new Subject("Estructura de Datos y Algorítmos",2)], 2);
let quarter3 = new Quarter([new Subject("Ingeniería en Software I",3),new Subject("Cálculo Integral",3)], 3);

quarter1.subjects[0].createGroup(studentsList.filter(student => student.getQuarter() === quarter1.number_quarter))
quarter3.subjects[0].createGroup(studentsList.filter(student => student.getQuarter() === quarter3.number_quarter))
quarter2.subjects[1].createGroup(studentsList.filter(student => student.getQuarter() === quarter2.number_quarter))


console.log(JSON.stringify(groupsList))



