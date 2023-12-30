

function addEmployee() {
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const department = document.getElementById('department').value;
    const salary = document.getElementById('salary').value;
    const experience = document.getElementById('experience').value;

    

    
    const employeeList = document.getElementById('employeeList');
    const newEmployee = document.createElement('div');
    newEmployee.innerHTML = `
        <p>Name: ${name}</p>
        <p>Position: ${position}</p>
        <p>Department: ${department}</p>
        <p>Salary: ${salary}</p>
        <p>Experience: ${experience}</p>
        <hr>
    `;

    employeeList.appendChild(newEmployee);

    
    document.getElementById('employeeForm').reset();
}
