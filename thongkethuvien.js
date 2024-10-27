// Dữ liệu giả lập
const libraryData = {
    books: [
      { title: "Book A", isDamaged: true },
      { title: "Book B", isDamaged: false },
      { title: "Book C", isDamaged: true },
      { title: "Book D", isDamaged: false }
    ],
    violators: [
      { name: "Nguyen Van A", violation: "Quá hạn", contact: "0123456789" },
      { name: "Tran Thi B", violation: "Không trả sách", contact: "0987654321" }
    ]
  };
  
  // Tạo biểu đồ thống kê sách hư hỏng
  const damagedBooksCount = libraryData.books.filter(book => book.isDamaged).length;
  const undamagedBooksCount = libraryData.books.length - damagedBooksCount;
  
  const ctx = document.getElementById('damagedBooksChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Hư Hỏng', 'Không Hư Hỏng'],
      datasets: [{
        label: 'Số lượng sách',
        data: [damagedBooksCount, undamagedBooksCount],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  // Tạo bảng người mượn vi phạm nội quy
  const violatorsTableBody = document.getElementById('violatorsTable').querySelector('tbody');
  libraryData.violators.forEach(violator => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${violator.name}</td>
      <td>${violator.violation}</td>
      <td>${violator.contact}</td>
    `;
    violatorsTableBody.appendChild(row);
  });
  