var studentOne = {
    firstName: 'Phiona',
    lastName: 'Ndemaru',
    age: 20,
    location: 'Kampala'
};
var studentTwo = {
    firstName: 'Maturu',
    lastName: 'Lilian',
    age: 58,
    location: 'Jinja'
};
var studentsList = [studentOne, studentTwo];
//creating the table using vanilla js
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.style.width = '100%';
table.style.background = 'blue';
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    nameCell.style.border = "1px solid blue";
    locationCell.style.border = "1px solid blue";
    nameCell.style.padding = "5px";
    locationCell.style.padding = "5px";
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
table.appendChild(tbody); //append the able body
document.body.appendChild(table);
