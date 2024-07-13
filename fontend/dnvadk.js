document.getElementById('showPassword').addEventListener('change', function() {
    var passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});
// Dữ liệu mẫu của người dùng (trong thực tế, dữ liệu này nên được lưu trữ trên server)
// Xử lý đăng nhập
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Kiểm tra thông tin đăng nhập
    let user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert('Đăng nhập thành công!');
        // Thực hiện các hành động sau khi đăng nhập thành công
        // Ví dụ: chuyển hướng trang, lưu trạng thái đăng nhập, vv...
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
});
// Xử lý đăng kí


