const student = {
    name : "",
    age : null,
    subjects : [],
    addSubject : function(subject) {
        this.subjects.push(subject);
    },
};
student.addSubject("ICT");
student.name.push("John");
student.age.push(20);
console.log(student);