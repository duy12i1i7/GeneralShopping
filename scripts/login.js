// login.js
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Thực hiện kiểm tra tên người dùng và mật khẩu ở đây, ví dụ:
  const isValid = authenticate(username, password);

  if (isValid) {
    window.location.href = 'index.html'; // Chuyển hướng đến trang thứ hai
  } else {
    errorMessage.style.display = 'block'; // Hiển thị thông báo lỗi
  }
});

function authenticate(username, password) {
  // Logic kiểm tra tài khoản và mật khẩu
  // Return true nếu thông tin đúng, false nếu không
  // Đây là nơi bạn sẽ thêm logic kiểm tra với cơ sở dữ liệu hoặc thông tin đăng nhập của bạn
  return (username === 'a' && password === 'a');
}


const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});