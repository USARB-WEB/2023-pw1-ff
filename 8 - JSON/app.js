document.getElementById('submitButton').addEventListener('click', () => {
    const student = {};
    student.name = document.getElementById('name').value;
    student.average_mark = document.getElementById('average_mark').value;
    student.phone = document.getElementById('phone').value;
    
    console.log(student);
    const studentJSON = JSON.stringify(student)
    console.log(studentJSON)

    console.log(JSON.parse(studentJSON))
})