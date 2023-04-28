var student1 = {
    firstName: "New",
    lastName: "Kid",
    age: 20,
    location: "Lagos"
};
var student2 = {
    firstName: "Old",
    lastName: "Kid",
    age: 18,
    location: "Akure"
};
var studentsList = [student1, student2];
var table = document.createElement("table");
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell();
    var locationCell = row.insertCell();
    firstNameCell.innerText = student.firstName;
    locationCell.innerText = student.location;
});
document.body.appendChild(table);
