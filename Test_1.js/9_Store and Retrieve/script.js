function createStudent(name, age, grade) {
    const student = {
        Name: name,
        Age: age,
        Grade: grade,
    };
    return student;
}

const student1 = createStudent("Fahim", 20, 'F');

function getStudentInfo(student) {
    console.log(`Name: ${student.Name}`);
    console.log(`Age: ${student.Age}`);
    console.log(`Grade: ${student.Grade}`);
    return;
}

getStudentInfo(student1);