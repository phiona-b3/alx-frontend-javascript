interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne: Student = {
    firstName: 'Phiona',
    lastName: 'Ndemaru',
    age: 20,
    location: 'Kampala',
}

const studentTwo: Student = {
    firstName: 'Maturu',
    lastName: 'Lilian',
    age: 58,
    location: 'Jinja',
}

const studentsList: Student[] = [studentOne, studentTwo];

//creating the table using vanilla js
const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.width = '100%';
table.style.background = 'blue';

studentsList.forEach(student => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    nameCell.style.border = "1px solid blue";
    locationCell.style.border = "1px solid blue";
    nameCell.style.padding = "5px";
    locationCell.style.padding = "5px";

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row)
});

table.appendChild(tbody); //append the able body
document.body.appendChild(table);


