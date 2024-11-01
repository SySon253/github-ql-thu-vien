let listBook = JSON.parse(localStorage.getItem('listBook')) ?? [];

const $table = document.getElementById('table');
const $buttonCreate = document.getElementById('create');
const $buttonUpdate = document.getElementById('update');
const $code = document.getElementById('code');
const $name_book = document.getElementById('name_book');
const $name_author = document.getElementById('name_author');
const $category = document.getElementById('category');
const $quantity = document.getElementById('quantity');
const $buttonSearch = document.getElementById('search');
const $keywordSearch = document.getElementById('keyword_search');

// Render the list of books
const renderBooks = (books = listBook) => {
    let rowsBook = '';
    for (let book of books) {
        rowsBook += `
            <tr> 
                <th scope ="row">${book.code}</th>
                <td>${book.name_book}</td>
                <td>${book.name_author}</td>
                <td>${book.category}</td>
                <td>${book.quantity}</td>
                <td>
                    <button class="btn btn-success" onclick="updateBook(${book.code})">Update</button>
                    <button class="btn btn-danger" onClick="deleteBook(${book.code})">Delete</button>
                </td>
            </tr>
        `;
    }
    $table.innerHTML = rowsBook;
};

// Clear input fields after creating or updating a book
const clearInput = () => {
    $code.value = '';
    $name_book.value = '';
    $name_author.value = '';
    $category.value = '';
    $quantity.value = '';
};


// Create a new book
$buttonCreate.onclick = () => {
    console.log('Create');
    const code = Number($code.value);
    const name_book = $name_book.value;
    const name_author = $name_author.value;
    const category = $category.value;
    const quantity = $quantity.value;

    for(let book of listBook){
        if(book.code === code){
            document.getElementById('error_code').innerHTML = 'Mã đã tồn tại';
            return;
        }
    }
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
    document.getElementById('error_code').innerHTML = '';
};
//delete
const deleteBook = (code) => {
    let index = -1;
    for(let i = 0; i < listBook.length;i++){
        if(listBook[i].code === code){
            index = i;
        }
    }
    listBook.splice(index,1);
    renderBooks();
    localStorage.setItem('listBook',JSON.stringify(listBook));
};
// // Update book details
// const updateBook = (codeBookUpdate) => {
//     console.log('codeBookUpdate: ', codeBookUpdate);
//     let index = -1;
//     for (let i = 0; i < listBook.length; i++) {
//         if (listBook[i].code === codeBookUpdate) {
//             index = i;
//             //break;
//         }
//     }
//     console.log('listBook[index]: ',listBook[index])

//     //if (index !== -1) {
//         const { code, name_book, name_author, category, quantity } = listBook[index];
//         $code.value = code;
//         $name_book.value = name_book;
//         $name_author.value = name_author;
//         $category.value = category;
//         $quantity.value = quantity;

//         // Disable the input for code, as it should not be changed during update
//         $code.disabled = true;

//         // Show update button and hide create button
//         $buttonUpdate.style.display = 'inline';
//         $buttonCreate.style.display = 'none';
//     //}
// };

// // Update the book information after making changes
// $buttonUpdate.onclick = () => {
//     const code = Number($code.value);
//     const name_book = $name_book.value;
//     const name_author = $name_author.value;
//     const category = $category.value;
//     const quantity = $quantity.value;

//     const bookUpdate = {
//         code,
//         name_book,
//         name_author,
//         category,
//         quantity,
//     };

//     // let index = listBook.findIndex((book) => book.code === code);
    
//     // if (index !== -1) {
//     //     listBook[index] = bookUpdate;
//     //     renderBooks();
//     //     clearInput();
//     //     $code.disabled = false;

//     //     // Hide update button and show create button
//     //     $buttonUpdate.style.display = 'none';
//     //     $buttonCreate.style.display = 'inline';

//     //     // Save updated list to localStorage
//     //     localStorage.setItem('listBook', JSON.stringify(listBook));
//     // }

//     let index = -1;
//     for(let i = 0;i < listBook.length; i++){
//         if(listBook[i].code === code){
//             index = i;
//         }
//     }
//     console.log('index: ',index);
//     listBook[index] = bookUpdate;
//     renderBooks();
//     clearInput();
//     $buttonUpdate.style.display = 'none';
//     $buttonCreate.style.display = 'inline';
//     localStorage.setItem('listBook',JSON.stringify(listBook));
// };

//update
const updateBook = (codeBookUpdate) => {
    console.log('codeBookUpdate: ',codeBookUpdate);
    let index = -1;
    for(let i = 0;i < listBook.length;i++){
        if(listBook[i].code === codeBookUpdate){
            index = i;
        }
    }
    console.log('listBook[index]:',listBook[index]);
    const{code, name_book,name_author,category,quantity} = 
    listBook[index];
    $code.value = code;
    $name_book.value = name_book;
    $name_author.value = name_author;
    $category.value = category;
    $quantity.value = quantity;

    $code.disabled = true;

    $buttonUpdate.style.display = 'inline';
    $buttonCreate.style.display = 'none';
};
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
    let index = -1;
    for(let i = 0;i < listBook.length; i++){
        if(listBook[i].code === code){
            index = i;
        }
    }
    console.log('index: ',index);
    listBook[index] = bookUpdate;
    renderBooks();
    clearInput();
    $code.disabled = false;
	$buttonUpdate.style.display = 'none';
	$buttonCreate.style.display = 'inline';
    localStorage.setItem('listBook',JSON.stringify(listBook));   
};


// //update chatgpt
// const updateBook = (codeBookUpdate) => {
//     console.log('codeBookUpdate: ', codeBookUpdate);
    
//     // Tìm sách với mã đã được cung cấp
//     let index = listBook.findIndex(book => book.code === codeBookUpdate);
    
//     // Nếu không tìm thấy sách, thông báo lỗi
//     if (index === -1) {
//         console.error('Book not found');
//         return;
//     }

//     // Trích xuất thông tin sách và hiển thị trên form
//     const { code, name_book, name_author, category, quantity } = listBook[index];
//     $code.value = code;
//     $name_book.value = name_book;
//     $name_author.value = name_author;
//     $category.value = category;
//     $quantity.value = quantity;

//     // Vô hiệu hóa trường mã sách để tránh thay đổi mã trong khi cập nhật
//     $code.disabled = true;

//     // Hiển thị nút update, ẩn nút create
//     $buttonUpdate.style.display = 'inline';
//     $buttonCreate.style.display = 'none';
// };

// $buttonUpdate.onclick = () => {
//     const code = Number($code.value);
//     const name_book = $name_book.value;
//     const name_author = $name_author.value;
//     const category = $category.value;
//     const quantity = $quantity.value;

//     // Tạo đối tượng sách cập nhật
//     const bookUpdate = {
//         code,
//         name_book,
//         name_author,
//         category,
//         quantity,
//     };

//     // Tìm chỉ mục của sách cần cập nhật
//     let index = listBook.findIndex(book => book.code === code);

//     // Nếu không tìm thấy sách, thông báo lỗi
//     if (index === -1) {
//         console.error('Book not found for update');
//         return;
//     }

//     // Cập nhật sách trong mảng
//     listBook[index] = bookUpdate;
    
//     // Cập nhật lại giao diện và lưu vào localStorage
//     renderBooks();
//     clearInput();

//     // Bật lại trường mã sách để người dùng có thể nhập mã mới
//     $code.disabled = false;

//     // Hiển thị nút create, ẩn nút update
//     $buttonUpdate.style.display = 'none';
//     $buttonCreate.style.display = 'inline';
    
//     // Lưu danh sách vào localStorage
//     localStorage.setItem('listBook', JSON.stringify(listBook));   
// };
// console.log('codeBookUpdate: ', codeBookUpdate);
// console.log('listBook:', listBook);


// Handle book search
$keywordSearch.oninput = () => {
    console.log('Searching...');
    const keywordSearch = $keywordSearch.value;
    const result = listBook.filter((book) =>{
        return book.name_book && book.name_book.toLowerCase().includes(keywordSearch.toLowerCase());
    });
    renderBooks(result);
};

renderBooks();