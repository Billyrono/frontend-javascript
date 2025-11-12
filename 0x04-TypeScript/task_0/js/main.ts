interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Billy",
  lastName: "Rono",
  age: 24,
  location: "Nairobi"
};

const student2: Student = {
  firstName: "Beryl",
  lastName: "Murimi",
  age: 20,
  location: "Murang'a"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

const headRow = document.createElement("tr");
const th1 = document.createElement("th");
th1.textContent = "First Name";
const th2 = document.createElement("th");
th2.textContent = "Location";
headRow.appendChild(th1);
headRow.appendChild(th2);
table.appendChild(headRow);

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);
