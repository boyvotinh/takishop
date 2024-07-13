function addToCart(button) {
    const productCard = button.closest('.product-card');
    const productId = productCard.dataset.id;
    const productName = productCard.dataset.name;
    const productPrice = parseFloat(productCard.dataset.price);
    const productImage = productCard.dataset.image;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1,
            image: productImage
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}
function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    let total = 0;
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            ${item.name} - Số lượng: ${item.quantity} - Giá: ${formatCurrency(item.price * item.quantity)}
            <button onclick="changeQuantity('${item.id}', -1)">-</button>
            <button onclick="changeQuantity('${item.id}', 1)">+</button>
        `;
        cartList.appendChild(li);
        total += item.price * item.quantity;
    });

    document.getElementById('cart-total').textContent = formatCurrency(total);
}
// Hàm định dạng tiền tệ Việt Nam
function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
// Hàm thay đổi số lượng sản phẩm trong giỏ hàng
function changeQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += change;
        if (existingItem.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }
}
function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
}
function checkout() {
    window.location.href = '#';
    clearCart();
}
window.onload = function() {
    displayCart();
};
// Hàm tìm kiếm
function searchProducts() {
    const filter = document.getElementById('searchInput').value.toUpperCase();
    const productList = document.getElementById('itemList');
    const productCards = productList.getElementsByClassName('product-card');
    for (let i = 0; i < productCards.length; i++) {
        const card = productCards[i];
        const txtValue = card.getAttribute('data-name').toUpperCase();
        const productCard = card.closest('.product-card');
        if (txtValue.indexOf(filter) > -1) {
            productCard.style.display = 'block';
        } else {
            productCard.style.display = 'none';
        }
    }
}
function filterProducts() {
    const priceRange = document.getElementById('priceRange').value;
    const category = document.getElementById('category').value;
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const price = parseFloat(product.getAttribute('data-price'));
        const productCategory = product.getAttribute('data-category'); 
        let priceMatch = false;
        switch(priceRange) {
            case '0-100':
                priceMatch = price >= 0 && price <= 100000;
                break;
            case '100-300':
                priceMatch = price > 100000 && price <= 300000;
                break;
            case '300-500':
                priceMatch = price > 300000 && price <= 500000;
                break;
            case '1000+':
                priceMatch = price > 1000000;
                break;
            default:
                priceMatch = true;
        }
        let categoryMatch = (category === 'all' || category === productCategory);
        
        if (priceMatch && categoryMatch) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}

