let listStudent = JSON.parse(localStorage.getItem('listStudent')) ?? [];

const $table = document.getElementById('table');
const $buttonCreate = document.getElementById('create');
const $id = document.getElementById('id');
const $name = document.getElementById('name');
const $phone = document.getElementById('phone');
const $book_name = document.getElementById('book_name');
const $code = document.getElementById('code');
const $start = document.getElementById('start');
const $finish = document.getElementById('finish');


const clearInput = () => {
    $id.value = '';
    $name.value= '';
    $phone.value = '';
    $book_name.value = '';
    $code.value = '';
    $start.value = '';
    $finish.value = '';
};
$buttonCreate.onclick = () => {
    console.log('Create');
    const id = Number($id.value);
    const name = $name.value;
    const phone = $phone.value;
    const book_name = $book_name.value;
    const code = $code.value;
    const start = $start.value;
    const finish = $finish.value;
    
    const newStudent = {
        id,
        name,
        phone,
        book_name,
        code,
        start,
        finish,
    };
    listStudent.push(newStudent);
    
    clearInput();
    localStorage.setItem('listStudent',JSON.stringify(listStudent));
};
// //Thiết kế mockup 
// //Lấy các phần tử cần tương tác
// const $violate = document.getElementById('violate');
// const $mockupContainer = document.getElementById('mockupContainer');
// const $closeMockupBtn = document.getElementById('closeMockupBtn');
// //Khi nhấn nút Violate 
// $violate.addEventListener('click', function(){
//     $mockupContainer.classList.remove('hidden');
//     $mockupContainer.style.display = 'flex';
// });
// //Khi nhấn nút (x)
// $closeMockupBtn.addEventListener('click',function(){
//     $mockupContainer.classList.add('hidden');
// });
// renderStudents();