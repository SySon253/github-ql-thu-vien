let listStudent = JSON.parse(localStorage.getItem('listStudent')) ?? [];
const $table = document.getElementById('table');

const $buttonDone = document.getElementById('done');
const $buttonSearch = document.getElementById('search');
const $keywordSearch = document.getElementById('keyword_search');

function done(button){
    const row = button.closest('tr');
    row.remove();
};

const renderStudents = (students = listStudent) => {
	let rowsStudent = '';
	for (let student of students) {
		rowsStudent += `
            <tr>
                <th scope="row" style="background-color: #eef2f7;color: black;">${student.id}</th>
                <td>${student.name}</td>
                <td>${student.phone}</td>
                <td>${student.book_name}</td>
                <td>${student.code}</td>
                <td>${student.start}</td>
                <td>${student.finish}</td>
                <td>
                    <button class="btn btn-danger" onClick="doneStudent(${student.id})">Done</button>
                </td>
            </tr>
        `;
	}

	$table.innerHTML = rowsStudent;
};
//Chức năng done
const doneStudent = (id) => {
    let index = -1;
    for(let i = 0; i < listStudent.length; i++){
        if(listStudent[i].id == id){
            index = i;
        }
    }
    listStudent.splice(index, 1);
    renderStudents();
    localStorage.setItem('listStudent', JSON.stringify(listStudent));
};
$keywordSearch.oninput = () => {

	console.log('Searching...');
	const keywordSearch = $keywordSearch.value;
	const result = listStudent.filter((student) =>
		student.name.toLowerCase().includes(keywordSearch.toLowerCase())
	);
	renderStudents(result);
};
renderStudents();
