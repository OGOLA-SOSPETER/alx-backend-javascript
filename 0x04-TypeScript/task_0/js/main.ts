interface Student{
firstName: string;
lastName: string;
age :number;
location: string;
}

const studentsList = Student[] = [
{
firstname: "Pauline",
lastName: "James",
age:20,
location: "Kenya"
},
{
firstName: "Peter",
lastName: "Johnson",
age:22,
location: "Kenya"
}
];

const table = document.getElementById("studentsTable");

if (table) {
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });
}
