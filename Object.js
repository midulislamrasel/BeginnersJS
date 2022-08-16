// student Details
/*
var name = "Md Midul islam";
var age = 23;
var cgpa = 3.57;
var language = ["Bengali", "Hindi", "English"]; */

// Object
var student = {
    name: "Md Midul islam ",
    age: 23,
    cgpa: 3.57,
    language: ["Bengali", "Hindi", "English"]
}


// Constotor
function Student(name,age,gpa,language) {
    this.name = name;
    this.age = age;
    this.gpa = gpa;
    this.language = language;
}
var student1 = new Student("Midul Islam", 23, 3.57, ["Bengali", "Hindi", "English"]);
var student2 = new Student("Rasel Islam", 20, 3.50, ["Bengali","English"]);
var student3 = new Student("Islam", 32, 3.40, ["Bengali", "Hindi"]);

//console.log(student.name)





// Constotor of Function 

function Student(name,age,gpa,language) {
    this.name = name;
    this.age = age;
    this.gpa = gpa;
    this.language = language;

    this.display = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.gpa);
        console.log(this.language);
    }
}
var student1 = new Student("Midul Islam", 23, 3.57, ["Bengali", "Hindi", "English"]);
var student2 = new Student("Rasel Islam", 20, 3.50, ["Bengali","English"]);
var student3 = new Student("Islam", 32, 3.40, ["Bengali", "Hindi"]);

student1.display();
