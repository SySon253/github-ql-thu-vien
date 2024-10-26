let listBook = JSON.parse(localStorage.getItem('listBook')) ?? [];

const $table = document.getElementById('table');
const $buttonCreate = document.getElementById('create');
const $buttonUpdate = document.getElementById('update');
const $code = document.getElementById('code');
const $name_book = document.getElementById('name_book');
const $name_author = document.getElementById('name_author');
const $category = document.getElementById('category');
const $quantity = document.getElementById('quantity');

const renderBooks = (books = listBook) => {
    let rowsBook = '';
    for(let book of books){
        rowsBook += `
            <tr> 
                <th scope ="row">${book.code}</th>
                <td>${book.name_book}</td>
                <td>${book.name_author}</td>
                <td>${book.category}</td>
                <td>${book.quantity}</td>
                <td>
                    <button class="btn btn-success" onclick="updateBook"(${book.code})">Update</button>
                </td>
            </tr>
        `;
    }
    $table.innerHTML = rowsBook;
};
//Chức năng create 
const clearInput = () => {
    $code.value = '';
    $name_book.value = '';
    $name_author.value = '';
    $category.value = '';
    $quantity.value = '';
};
$buttonCreate.onclick = () => {
    console.log('Create book');
    const code = Number($code.value);
    const name_book = $name_book.value;
    const name_author = $name_author.value;
    const category = $category.value;
    const quantity = $quantity.value;
    // for(let book of listBook){
    //     if(book.code == code){
    //         document.getElementById('error_code').innerHTML = 'Mã sách đã tồn tại';
    //         return;
    //     }
    // }
    const newBook = {
        code,
        name_book,
        name_author,
        category,
        quantity,
    };
    listBook.push(newBook);
    renderBooks();
    clearInput();
    localStorage.setItem('listBook', JSON.stringify(listBook));
    document.getElementById('error_id').innerHTML = '';
};
//Chức năng update
const updateBook = (codeBookUpdate) => {
    console.log('codeBookUpdate: ',codeBookUpdate);
    let index = -1;
    for(let i = 0; i< listBook.length;i++){
        if(listBook[i].id == codeBookUpdate){
            index = i;
        }
    }
    console.log('listBook[index]: ',listBook[index]);
    const {code,name_book,name_author,category,quantity} =
        listBook[index];
    $code.value = code;
    $name_book.value = name_book;
    $name_author.value = name_author;
    $category.value = category;
    $quantity.value = quantity;
    //Disabled input nhập mã sách
    $code.disabled = true;
    //Show button update và ẩn create
    $buttonUpdate.style.display = 'inline';
    $buttonCreate.style.display = 'none';
};
//Cập nhật lại
$buttonUpdate.onclick = () => {
    const code = Number($code.value);
    const name_book = $name_book.value;
    const name_author = $name_author.value;
    const category = $category.value;
    const quantity = $quantity.value;
    const bookUpdate = {
        code,
        name_book,
        name_author,
        category,
        quantity,
    };
    //tìm vị trí index của học sinh đó
    let index = -1;
    for(let i = 0;i<listBook.length;i++){
        if(listBook[i].id == id){
            index = i;
        }
    }
    console.log('index:',index);
    listBook[index] = bookUpdate;
    renderBooks();
    clearInput();
    $code.disabled = false;

    $buttonUpdate.style.display = 'none';
    $buttonCreate.style.display = 'inline';
    localStorage.setItem('listBook',JSON.stringify(listBook));
};
// $keywordSearch.oninput = () => {
//     console.log('Searching...');
//     const keywordSearch = $keywordSearch.value;
//     const result = listBook.filter((book) =>
//         book.name_book.toLowerCase().includes(keywordSearch.toLowerCase())
//     );
// renderBooks(result);
// };
renderBooks();