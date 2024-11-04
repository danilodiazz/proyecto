
const products = {
    navidad: [
        { name: 'Árbol de Navidad', price: 79.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X0TFDDiOGlk71MI2zYuogNvVOBV7RW.png', stock: 10 },
        { name: 'Guirnalda Luminosa', price: 19.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3beiQYbBYxCfh6uGoYz63ONNLaI2Cq.png', stock: 20 },
        { name: 'Set de Adornos Navideños', price: 29.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a2Ts9R2RV1i0ER3KQ97SCUskLzKGW8.png', stock: 15 },
        { name: 'Calcetín Navideño', price: 14.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XSPdQEV5eZlgsvNacjaIyTCjDdy5Zv.png', stock: 30 },
    ],
    cumpleanos: [
        { name: 'Globos de Cumpleaños', price: 9.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6ue8JZOHRje1JPYteIK7kRJjSbfmQX.png', stock: 50 },
        { name: 'Velas Numéricas', price: 4.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MqbF1vSNE1TlUd8YOvOzbySWummbNZ.png', stock: 100 },
        { name: 'Piñata Festiva', price: 24.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gD9u9xoKVY20CEkSdMCQ4o6dYocYGc.png', stock: 5 },
        { name: 'Gorros de Fiesta', price: 7.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-adghwrUQxNuAZ16EiBl3M3w0k7x7AJ.png', stock: 40 },
    ],
    'otras-fiestas': [
        { name: 'Máscara de Carnaval', price: 14.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qyvgeNI3vQnGQlS7sGsRW7qC5wDpga.png', stock: 25 },
        { name: 'Serpentinas Multicolor', price: 3.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NK0DjQntrp3IwK4IdL3FFywuGTKt81.png', stock: 60 },
        { name: 'Set de Decoración Halloween', price: 34.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QiOMMuJtJCwkzzpLvuRJn56cujsohi.png', stock: 8 },
        { name: 'Confeti Brillante', price: 5.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bMsLTv5NtOiDWvdQ4WYscuRvIB0SMk.png', stock: 35 },
    ],
};

let currentCategory = 'navidad';
let cart = [];
let currentUser = null;

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const cedula = document.getElementById('cedula').value;
    const fullname = document.getElementById('fullname').value;

    if (username === 'admin' && password === 'admin123') {
        currentUser = { username, cedula, fullname, isAdmin: true };
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('main-page').style.display = 'block';
        document.getElementById('inventory-btn').style.display = 'inline-block';
        showInventory();
    } else {
        currentUser = { username, cedula, fullname, isAdmin: false };
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('main-page').style.display = 'block';
        document.getElementById('inventory-btn').style.display = 'none';
        renderProducts();
    }
}

function logout() {
    currentUser = null;
    cart = [];
    updateCartCount();
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
}

function changeCategory(category) {
    currentCategory = category;
    renderProducts();
    updateActiveButton();
}

function updateActiveButton() {
    const buttons = document.querySelectorAll('.category-button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.textContent.toLowerCase() === currentCategory) {
            button.classList.add('active');
        }
    });
}

function renderProducts() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    products[currentCategory].forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7nf098FInsoxrdScndizarSHZfO8hA.png" alt="Logo" class="product-logo">
                ${product.name}
            </h3>
            <img src="${product.image}" alt="${product.name}">
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="btn" onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">Agregar al Carrito</button>
        `;
        productsDiv.appendChild(productDiv);
    });
}

function addToCart(name, price, image) {
    const existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

function showCart() {
    const modal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <div class="cart-item-actions">
                <button onclick="decreaseQuantity(${index})">-</button>
                <span>${item.quantity}</span>
                <button onclick="increaseQuantity(${index})">+</button>
                <button onclick="removeFromCart(${index})">Eliminar</button>
            </div>
        `;
        cartItems.appendChild(itemDiv);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
    modal.style.display = 'block';
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }
    updateCartCount();
    showCart();
}

function increaseQuantity(index) {
    cart[index].quantity++;
    updateCartCount();
    showCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    showCart();
}

function finalizePurchase() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío.');
        return;
    }
    const invoiceDiv = document.getElementById('invoice');
    invoiceDiv.style.display = 'block';
    document.getElementById('products-page').style.display = 'none';
    document.getElementById('cart-modal').style.display = 'none';

    let invoiceHTML = `
        <h2>Factura</h2>
        <p><strong>Nombre:</strong> ${currentUser.fullname}</p>
        <p><strong>Cédula:</strong> ${currentUser.cedula}</p>
        <h3>Resumen de la compra:</h3>
    `;

    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        invoiceHTML += `
            <div class="invoice-item">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${itemTotal.toFixed(2)}</p>
                </div>
            </div>
        `;
        total += itemTotal;
    });

    invoiceHTML += `<h3>Total: $${total.toFixed(2)}</h3>`;
    invoiceHTML += `<button class="btn" onclick="closeInvoice()">Cerrar</button>`;

    invoiceDiv.innerHTML = invoiceHTML;
    cart = [];
    updateCartCount();
}

function closeInvoice() {
    document.getElementById('invoice').style.display = 'none';
    document.getElementById('products-page').style.display = 'block';
}

function showInventory() {
    if (currentUser && currentUser.isAdmin) {
        document.getElementById('products-page').style.display = 'none';
        document.getElementById('inventory-page').style.display = 'block';
        renderInventory();
    } else {
        alert('No tienes permiso para ver el inventario.');
    }
}

function renderInventory() {
    const tableBody = document.querySelector('#inventory-table tbody');
    tableBody.innerHTML = '';
    Object.entries(products).forEach(([category, productList]) => {
        productList.forEach(product => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = product.name;
            row.insertCell(1).textContent = `$${product.price.toFixed(2)}`;
            row.insertCell(2).textContent = product.stock;
            const actionsCell = row.insertCell(3);
            actionsCell.innerHTML = `
                <button onclick="editProduct('${category}', '${product.name}')">Editar</button>
                <button onclick="removeProduct('${category}', '${product.name}')">Eliminar</button>
            `;
        });
    });
}

function editProduct(category, productName) {
    const product = products[category].find(p => p.name === productName);
    if (product) {
        const newPrice = prompt('Ingrese el nuevo precio:', product.price);
        const newStock = prompt('Ingrese el nuevo stock:', product.stock);
        if (newPrice !== null && newStock !== null) {
            product.price = parseFloat(newPrice);
            product.stock = parseInt(newStock);
            renderInventory();
        }
    }
}

function removeProduct(category, productName) {
    if (confirm(`¿Está seguro de que desea eliminar ${productName}?`)) {
        products[category] = products[category].filter(p => p.name !== productName);
        renderInventory();
    }
}

function addNewProduct() {
    const name = document.getElementById('new-product-name').value;
    const price = parseFloat(document.getElementById('new-product-price').value);
    const stock = parseInt(document.getElementById('new-product-stock').value);
    const category = document.getElementById('new-product-category').value;

    if (name && !isNaN(price) && !isNaN(stock)) {
        const newProduct = {
            name,
            price,
            stock,
            image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7nf098FInsoxrdScndizarSHZfO8hA.png' // Placeholder image
        };
        products[category].push(newProduct);
        renderInventory();
        // Clear form
        document.getElementById('new-product-name').value = '';
        document.getElementById('new-product-price').value = '';
        document.getElementById('new-product-stock').value = '';
        toggleAddProductForm();
    } else {
        alert('Por favor, complete todos los campos correctamente.');
    }
}

function toggleAddProductForm() {
    const form = document.getElementById('inventory-form');
    const button = document.getElementById('show-add-product-form');
    if (form.style.display === 'none') {
        form.style.display = 'block';
        button.textContent = 'Cancelar';
    } else {
        form.style.display = 'none';
        button.textContent = 'Agregar Producto';
    }
}

function showProductsPage() {
    document.getElementById('inventory-page').style.display = 'none';
    document.getElementById('products-page').style.display = 'block';
    renderProducts();
}

document.getElementById('inventory-btn').addEventListener('click', showInventory);

document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
});

// Close the cart modal when clicking on the close button or outside the modal
window.onclick = function(event) {
    const modal = document.getElementById('cart-modal');
    if (event.target == modal || event.target.className == 'close') {
        modal.style.display = 'none';
    }
}

// Mobile/Desktop toggle functionality
const viewToggle = document.getElementById('viewToggle');
viewToggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.remove('mobile');
    } else {
        document.body.classList.add('mobile');
    }
});

// Check if the device is mobile on page load
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Inicialización de la página
window.onload = () => {
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('main-page').style.display = 'none';
    
    if (isMobile()) {
        document.body.classList.add('mobile');
        viewToggle.checked = false;
    } else {
        document.body.classList.remove('mobile');
        viewToggle.checked = true;
    }
};
