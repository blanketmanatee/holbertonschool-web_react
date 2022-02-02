interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Ashley',
    lastName: 'Price',
    age: 33,
    location: 'Oklahoma',
}

const student2: Student = {
    firstName: 'Bob',
    lastName: 'Holbie',
    age: 21,
    location: 'California',
}

const studentsList: Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body") [0];
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

const rowHead: HTMLTableRowElement = thead.insertRow(0);
const cellHead: HTMLTableCellElement = rowHead.insertCell(0);
const cell2Head: HTMLTableCellElement = rowHead.insertCell(1);

cellHead.innerHTML = "firstName";
cell2Head.innerHTML = "location";

table.append(thead);

studentsList.forEach((student) => {
    const row: HTMLTableRowElement = tbody.insertRow(0);
    const cell1: HTMLTableCellElement = row.insertCell(0);
    const cell2: HTMLTableCellElement = row.insertCell(1);

    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});
table.append(tbody);
body.append(table);