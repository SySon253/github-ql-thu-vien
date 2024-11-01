// Dữ liệu cho biểu đồ sách hư hỏng
const damagedBooksData = {
    labels: ['Sách Mới', 'Sách Cũ', 'Sách Hư Hỏng'],
    datasets: [{
        label: 'Số lượng',
        data: [30, 20, 10], // Số lượng sách mới, cũ và hư hỏng
        backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(255, 99, 132, 0.6)'
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
    }]
  };
  
  // Khởi tạo biểu đồ sách hư hỏng
  const ctx = document.getElementById('damagedBooksChart').getContext('2d');
  const damagedBooksChart = new Chart(ctx, {
    type: 'bar',
    data: damagedBooksData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });
  
  // Dữ liệu người mượn vi phạm
  const violators = [
    { name: "Nguyễn Văn A", violation: "Trễ hạn 3 lần", contactMethod: "Email" },
    { name: "Trần Thị B", violation: "Mượn sách không trả", contactMethod: "Số điện thoại" },
    { name: "Lê Văn C", violation: "Làm hư sách", contactMethod: "Email" }
  ];
  
  // Thêm dữ liệu vào bảng vi phạm
  const violatorsTableBody = document.querySelector('#violatorsTable tbody');
  
  violators.forEach(violator => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${violator.name}</td>
        <td>${violator.violation}</td>
        <td>${violator.contactMethod}</td>
    `;
    violatorsTableBody.appendChild(row);
  });