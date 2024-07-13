document.getElementById('showPassword').addEventListener('change', function() {
    var passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
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