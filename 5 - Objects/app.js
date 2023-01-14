const studentName = "Ion Creanga";
const studentBirthDate = "01.03.1887";
const studentSalary = 14567;
const studentMarks = [8, 9, 10];
const studentMotherName = "Smaranda Creanga";
const studentMotherBirthDate = "01.03.1860";
const currentYear = 2023;

console.log(`Name: ${studentName}`);
console.log(`Birth date: ${studentBirthDate}`);
console.log(`Salary: ${studentSalary}`);


const student = {
    name: "Ion Creanga",
    birthDate: "01.03.1887",
    salary: 14567,
    marks: [8, 9, 10],
    mother: {
        name: "Smaranda Creanga",
        birthDate: "01.03.1860"
    }
}
const today = "14.01.2023";

console.log(`Name: ${student.name}`);
console.log(`Birth date: ${student.birthDate}`);
console.log(`Salary: ${student.salary}`);


console.log(student);


const students = [
    {
        name: "Ion Creanga",
        birthDate: "01.03.1887",
        salary: 14567,
        marks: [8, 9, 10],
        mother: {
            name: "Smaranda Creanga",
            birthDate: "01.03.1860"
        }
    },
    {
        name: "Mihai Eminescu",
        birthDate: "01.04.1850",
        salary: 9000,
        marks: [8, 9, 5],
        mother: {
            name: "Ana Eminescu",
            birthDate: "01.03.1830"
        }
    }
]

console.log(students);