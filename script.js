// // Define an array to store student objects
// const studentsArray = [];

// // Get DOM elements
// const studentTable = document.getElementById('studentTable');
// const studentList = document.getElementById('studentList');
// const studentForm = document.getElementById('studentForm');
// const searchBox = document.getElementById('searchBox');

// // Function to add a new student
// function addStudent() {
//   const name = document.getElementById('name').value;
//   const age = document.getElementById('age').value;
//   const grade = document.getElementById('grade').value;
//   const degree = document.getElementById('degree').value;
//   const email = document.getElementById('email').value;

//   const newStudent = { name, age, grade, degree, email };
//   studentsArray.push(newStudent);

//   renderStudentList();
//   clearForm();
// }

// // Function to render the student list
// function renderStudentList() {
//   studentList.innerHTML = '';
//   studentsArray.forEach((student, index) => {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//       <td>${student.name}</td>
//       <td>${student.age}</td>
//       <td>${student.grade}</td>
//       <td>${student.degree}</td>
//       <td>${student.email}</td>
//       <td><button onclick="editStudent(${index})">Edit</button></td>
//       <td><button onclick="deleteStudent(${index})">Delete</button></td>
//     `;
//     studentList.appendChild(row);
//   });
// }

// // Function to edit a student
// function editStudent(index) {
//   const student = studentsArray[index];
//   document.getElementById('name').value = student.name;
//   document.getElementById('age').value = student.age;
//   document.getElementById('grade').value = student.grade;
//   document.getElementById('degree').value = student.degree;
//   document.getElementById('email').value = student.email;

//   studentForm.onsubmit = () => updateStudent(index);
//   document.getElementById('submitButton').textContent = 'Edit Student';
// }

// // Function to update a student
// function updateStudent(index) {
//   studentsArray[index] = {
//     name: document.getElementById('name').value,
//     age: document.getElementById('age').value,
//     grade: document.getElementById('grade').value,
//     degree: document.getElementById('degree').value,
//     email: document.getElementById('email').value,
//   };

//   renderStudentList();
//   clearForm();
// }

// // Function to delete a student
// function deleteStudent(index) {
//   studentsArray.splice(index, 1);
//   renderStudentList();
// }

// // Function to filter students by name, email, or degree
// function filterStudents() {
//   const searchText = searchBox.value.toLowerCase();
//   const filteredStudents = studentsArray.filter(student =>
//     student.name.toLowerCase().includes(searchText) ||
//     student.email.toLowerCase().includes(searchText) ||
//     student.degree.toLowerCase().includes(searchText)
//   );

//   studentList.innerHTML = '';
//   filteredStudents.forEach((student, index) => {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//       <td>${student.name}</td>
//       <td>${student.age}</td>
//       <td>${student.grade}</td>
//       <td>${student.degree}</td>
//       <td>${student.email}</td>
//       <td><button onclick="editStudent(${index})">Edit</button></td>
//       <td><button onclick="deleteStudent(${index})">Delete</button></td>
//     `;
//     studentList.appendChild(row);
//   });
// }

// // Function to clear the form
// function clearForm() {
//   studentForm.reset();
//   studentForm.onsubmit = addStudent;
//   document.getElementById('submitButton').textContent = 'Add Student';
// }

// // Attach event listeners
// studentForm.onsubmit = addStudent;
// searchBox.addEventListener('input', filterStudents);

// // Initial rendering of student list




// const students = [
//   {
//     ID: 1,
//     name: 'Alice',
//     age: 21,
//     grade: 'A',
//     degree: 'Btech',
//     email: 'alice@example.com'
//   },
//   {
//     ID: 2,
//     name: 'Bob',
//     age: 22,
//     grade: 'B',
//     degree: 'MBA',
//     email: 'bob@example.com'
//   },
//   {
//     ID: 3,
//     name: 'Charlie',
//     age: 20,
//     grade: 'C',
//     degree:'Arts',
//     email: 'charlie@example.com'
//   }
// ];

// const table = document.createElement('table');

// students.forEach(student => {
//   const row = document.createElement('tr');

//   for (const property in student) {
//     const cell = document.createElement('td');
//     cell.textContent = student[property];
//     row.appendChild(cell);
//   }

//   const editCell = document.createElement('td');
//   const editButton = document.createElement('button');
//   editButton.textContent = 'Edit';
//   editButton.addEventListener('click', () => {
//     // Fill the form and change button text here
//   });
//   editCell.appendChild(editButton);
//   row.appendChild(editCell);

//   const deleteCell = document.createElement('td');
//   const deleteButton = document.createElement('button');
//   deleteButton.textContent = 'Delete';
//   deleteButton.addEventListener('click', () => {
//     // Delete the student profile here
//   });
//   deleteCell.appendChild(deleteButton);
//   row.appendChild(deleteCell);

//   table.appendChild(row);
// });

// document.body.appendChild(table);

// const searchBox = document.createElement('input');
// searchBox.placeholder = 'Search by name, email, or degree';
// document.body.appendChild(searchBox);





















// const students = [
//     {
//     ID: 1,
//     name: 'Alice',
//     age: 21,
//     grade: 'A',
//     degree: 'Btech',
//     email: 'alice@example.com'
//   },
//   {
//     ID: 2,
//     name: 'Bob',
//     age: 22,
//     grade: 'B',
//     degree: 'MBA',
//     email: 'bob@example.com'
//   },
//   {
//     ID: 3,
//     name: 'Charlie',
//     age: 20,
//     grade: 'C',
//     degree:'Arts',
//     email: 'charlie@example.com'
//   }
  
// ];

// function renderStudents() {
//   const table = document.getElementById("student-table");
//   table.innerHTML = ""; // Clear existing table rows

//   students.forEach((student) => {
//     const row = document.createElement("tr");
//     row.innerHTML = `
//       <td>${student.ID}</td>
//       <td>${student.name}</td>
//       <td>${student.email}</td>
//       <td>${student.age}</td>
//       <td>${student.grade}</td>
//       <td>${student.degree}</td>
//       <td><button class="edit-btn"><img src="edit.png">edit</button></td>
//       <td><button class="delete-btn"><img src="delete">Delete</button></td>
//     `;

//     const editBtn = row.querySelector(".edit-btn");
//     const deleteBtn = row.querySelector(".delete-btn");

//     editBtn.addEventListener("click", () => {
//       // Populate form with student data and change button text to "Edit Student"
//     });

//     deleteBtn.addEventListener("click", () => {
//       // Remove student from array and update table
//     });

//     table.appendChild(row);
//   });
// }

// // Call renderStudents initially to populate the table
// renderStudents();

























// Function to add a new student to the table
// 


const form = document.getElementById("submit-form");
const formButton = document.getElementById("btn");
const tableContainer = document.getElementById("table");
const search = document.getElementById("search-box");
let formmode = 0;
let editIndex = -1;
let studentData = [];

// functions
// adding new students on click
function addStudent() {
  const data = new FormData(form);
  let newstudent = {
    name: "no name",
    email: "no@email.com",
    gpa: "0",
    age: "16",
    degree: "BTech",
  };
  data.forEach((v, k) => (newstudent[k] = v ? v : newstudent[k]));
  studentData = [...studentData, newstudent];
  form.reset();
  display(studentData);
}

// handling click ev for edit of student
function handleStudentEdit(i) {
  editIndex = i;
  formmode = 1;
  formButton.value = "Edit Student";
  form.name.value = studentData[i].name;
  form.email.value = studentData[i].email;
  form.gpa.value = studentData[i].gpa;
  form.age.value = studentData[i].age;
  form.degree.value = studentData[i].degree;
}

// editing student
function editStudent() {
  const data = new FormData(form);
  data.forEach((v, k) => (studentData[editIndex][k] = v));
  display(studentData);
  editIndex = -1;
  handleReset();
}

// deleting student
function handleStudentDelete(i) {
  studentData = studentData.filter((_, index) => index !== i);
  display(studentData);
}

// displaying the student data from the params array
function display(data) {
  document.getElementById("tbody").remove();
  const newTbody = document.createElement("tbody");
  if (data.length > 0)
    data.forEach((student, i) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td colspan="1" role="row">${i + 1}</td>
                <td colspan="5">${student.name}</td>
                <td colspan="5">${student.email}</td>
                <td colspan="2">${student.age}</td>
                <td colspan="2">${student.gpa}</td>
                <td colspan="3"><div class="cell-block">
                ${student.degree}
                <div>
                <img src="edit.png" height="16" onclick="handleStudentEdit(${i})"></img>
                <img src="delete.png" height="16" onclick="handleStudentDelete(${i})"></img>
                </div>
                </div></td>
                `;
      newTbody.appendChild(row);
    });
  else {
    const row = document.createElement("tr");
    row.innerHTML = `
                <td colspan="1" role="row"> </td>
                <td colspan="5"> </td>
                <td colspan="5"> </td>
                <td colspan="2"> </td>
                <td colspan="2"> </td>
                <td colspan="3"> </td>
                `;
    newTbody.appendChild(row);
  }
  newTbody.id = "tbody";
  tableContainer.append(newTbody);
}

// filtering the student array according to whatever is searched
function handleSearch() {
  if (!search.value) display(studentData);
  else {
    const regex = new RegExp(search.value, "gi");
    let newData = [...studentData];
    newData = newData.filter(
      (student) =>
        regex.test(student.name.degree) ||
        regex.test(student.email) ||
        regex.test(student.degree)
    );
    display(newData);
  }
}

// handling what to do when form is reset
function handleReset() {
  formmode = 0;
  formButton.value = "Add Student";
  form.reset();
}

// main logic
document.onload = display(studentData);
search.addEventListener("keyup", handleSearch);
form.addEventListener("reset", handleReset);
formButton.addEventListener("click", () =>
  formmode === 0 ? addStudent() : editStudent()
);