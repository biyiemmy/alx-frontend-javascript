interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "New",
  lastName: "Kid",
  age: 20,
  location: "Lagos"
}

const student2: Student = {
  firstName: "Old",
  lastName: "Kid",
  age: 18,
  location: "Akure"
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach(student => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();
  firstNameCell.innerText = student.firstName;
  locationCell.innerText = student.location;
});

document.body.appendChild(table);
