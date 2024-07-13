// Xử lý đăng kí
document.getElementById('createForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('new-username').value;
    var password = document.getElementById('new-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
    }
    users.push({ username: username, password: password });
    alert('Đăng kí thành công!');
    window.location.href = 'home.html';
});
document.getElementById('showPassword').addEventListener('change', function() {
    var newPasswordField = document.getElementById('new-password');
    var confirmPasswordField = document.getElementById('confirm-password');
    if (this.checked) {
        newPasswordField.type = 'text';
        confirmPasswordField.type = 'text';
    } else {
        newPasswordField.type = 'password';
        confirmPasswordField.type = 'password';
    }
});