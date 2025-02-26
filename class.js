class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Kolimunnesa school"
    }

}

const student1 = new Student(11, "Bam"); // Creation of new class
const student2 = new Student(22, "Liam");
const student3 = new Student(29, "Poppy");
console.log(student1,student2);