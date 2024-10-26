let listStudent = JSON.parse(localStorage.getItem('listStudent')) ?? [];
const $table = document.getElementById('table');

const renderStudents = (students = listStudent) => {
	let rowsStudent = '';
	for (let student of students) {
		rowsStudent += `
            <tr>
                <th scope="row">${student.id}</th>
                <td>${student.name}</td>
                <td>${student.phone}</td>
                <td>${student.book_name}</td>
                <td>${student.code}</td>
                <td>${student.start}</td>
                <td>${student.finish}</td>
                <td>
                    <button class="btn btn-danger" onClick="doneStudent(${student.id})">Done</button>
                    <button class="btn btn-danger" onClick="violateStudent(${student.id}")>Violate</button>
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
        if(listStudent[i] == i){
            index = i;
        }
    }
    listStudent.splice(index, 1);
    renderStudents();
    localStorage.setItem('listStudent', JSON.stringify(listStudent));
};
//Chức năng violate 
// Hiển thị mockup lên
//Thiết kế mockup 
//Lấy các phần tử cần tương tác
const violate = document.getElementById('violate');
const mockupContainer = document.getElementById('mockupContainer');
const closeMockupBtn = document.getElementById('closeMockupBtn');
//Khi nhấn nút Violate 
violate.addEventListener('click', function(){
    mockupContainer.classList.remove('hidden');
    mockupContainer.style.display = 'flex';
});
//Khi nhấn nút (x)
closeMockupBtn.addEventListener('click',function(){
    mockupContainer.classList.add('hidden');
});
renderStudents();