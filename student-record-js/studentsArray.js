// Array of student objects
const students = [
    {id: 1, name: "Jay", age: 24, course: "Software Development", marks: 78},
    {id: 2, name: "Aaron", age: 25, course: "Cybersecurity", marks: 81},
    {id: 3, name: "Joanne", age: 22, course: "Business management", marks: 85},
    {id: 4, name: "Megan", age: 21, course: "Data science", marks: 88 },
    {id: 5, name: "Matthew", age: 20, course: "Web development", marks: 92},
];

// Display all students
function displayStudents() {
    for (let i = 0; i < students.length; i++) {
        console.log(`ID: ${students[i].id}`);
        console.log(`Name: ${students[i].name}`);
        console.log(`Age: ${students[i].age}`);
        console.log(`Course: ${students[i].course}`);
        console.log(`Marks: ${students[i].marks}`);
        console.log("--------------------");
    }
}

// Find a student by ID
function findStudent(id) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            console.log(`ID: ${students[i].id}`);
            console.log(`Name: ${students[i].name}`);
            console.log(`Age: ${students[i].age}`);
            console.log(`Course: ${students[i].course}`);
            console.log(`Marks: ${students[i].marks}`);
            return;
        }
    }
    console.log("Student not found.");
}

// Calculate average marks
function averageMarks() {
    let total = 0;
    for (let i = 0; i < students.length; i++) {
        total = total + students[i].marks;
    }
    const average = total / students.length;
    console.log(`Average marks: ${average}`);
}

// Find student with highest marks
function highestMarks() {
    let highest = students[0];
    for (let i = 1; i < students.length; i++) {
        if (students[i].marks > highest.marks) {
            highest = students[i];
        }
    }
    console.log(`Highest marks: ${highest.name} with ${highest.marks}`);
}

// Count students who scored above 70
function aboveSeventy() {
    let count = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].marks > 70) {
            count = count + 1;
        }
    }
    console.log(`Students above 70 marks: ${count}`);
}

// Add a new student
function addStudent(student) {
    students.push(student);
    console.log("Student has been added! Updated list:");
    displayStudents();
}

// ---- Run everything ----
displayStudents();
findStudent(5);
averageMarks();
highestMarks();
aboveSeventy();
addStudent({ id: 6, name: "Matilda", age: 22, course: "Data Science", marks: 89 });