// Lắng nghe sự kiện click trên nút xóa dữ liệu
document.getElementById('clearLocalStorageBtn').addEventListener('click', function() {
    // Xóa hết dữ liệu trong localStorage
    localStorage.clear();
    alert('Đã xóa hết dữ liệu trong LocalStorage!');
});
