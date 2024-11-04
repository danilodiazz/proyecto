<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variedades Sincelejo</title>
    <link rel="icon" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7nf098FInsoxrdScndizarSHZfO8hA.png" type="image/png">
    <header>
        <h1 style="display: inline; margin-left: 10px; color: white;">Variedades Sincelejo</h1>
        <h2 style="color: white; margin: 0;">CONTAPLUS</h2>
    </header>
    
    
    <style>
        :root {
            --primary-color: #FF4D8D;
            --secondary-color: #FFD700;
            --background-color: #ffffff;
            --text-color: #333333;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--background-color);
        }
        header {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            padding: 1rem;
            text-align: center;
        }
        
        .header-logo {
            width: 100%; /* Ocupa toda la pantalla horizontalmente */
            height: 80px; /* Altura fija pequeña */
            object-fit: cover; /* Mantiene la proporción de la imagen */
            object-position: center; /* Centra la imagen verticalmente */
            display: block; /* Elimina el espacio en blanco debajo de la imagen */
        }

        header {
            margin: 0;
            padding: 0;
            width: 100%; /* Asegura que el header también ocupe todo el ancho */
        }
        main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        .category-buttons {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-bottom: 20px;
        }
        .category-button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 50px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .category-button:hover, .category-button.active {
            background-color: var(--secondary-color);
        }
        .logout-button {
            position: absolute;
            top: 80px;
            right: 20px;
            background-color: white;
            color: var(--primary-color);
            border: 1px solid var(--primary-color);
            padding: 10px 20px;
            border-radius: 50px;
            cursor: pointer;
        }
        .products {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
        }
        .product {
            background-color: white;
            border-radius: 10px;
            padding: 15px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            transition: transform 0.3s ease-in-out;
        }
        .product:hover {
            transform: translateY(-5px);
        }
        .product img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 5px;
        }
        .product h3 {
            margin-top: 10px;
            margin-bottom: 5px;
            display: flex;
            align-items: center;
        }
        .product h3 img {
            width: 24px;
            height: 24px;
            margin-right: 10px;
            border-radius: 50%;
        }
        .price {
            font-weight: bold;
            color: var(--primary-color);
        }
        .btn {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .btn:hover {
            background-color: var(--secondary-color);
        }
        #cart {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: var(--primary-color);
            color: white;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        #cart-count {
            position: absolute;
            top: -5px;
            right: -5px;
            background-color: var(--secondary-color);
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
        }
        footer {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            text-align: center;
            padding: 1rem;
            margin-top: 20px;
        }
        #login-form {
            max-width: 300px;
            margin: 50px auto;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        #login-form input {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        #login-form .btn {
            width: 100%;
        }
    </style>
</head>
<body>
   
    <div id="login-page" style="display: none;">
        <header>
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7nf098FInsoxrdScndizarSHZfO8hA.png" alt="Variedades Sincelejo Logo" class="header-logo">
        </header>
        <div id="login-form">
            <center> <h2>Iniciar Sesión</h2>
            <form onsubmit="return login(event)">
                <input type="text" id="username" placeholder="Usuario" required>
                <input type="password" id="password" placeholder="Contraseña" required>
                <button type="submit" class="btn">Ingresar</button>
            </form></center> 
        </div>
        <footer style="position: fixed; bottom: 0; left: 0; right: 0; text-align: center; background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white; padding: 1rem;">
            <p>&copy; 2024 Variedades Sincelejo Conta Plus. Todos los derechos reservados.</p>
        </footer>
        
    </div>

    <div id="main-page" style="display: none;">
        <header>
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7nf098FInsoxrdScndizarSHZfO8hA.png" alt="Variedades Sincelejo Logo" class="header-logo">
        </header>
        
        <main>
            <div class="category-buttons">
                <button class="category-button active" onclick="changeCategory('navidad')">Navidad</button>
                <button class="category-button" onclick="changeCategory('cumpleanos')">Cumpleaños</button>
                <button class="category-button" onclick="changeCategory('otras-fiestas')">Otras Fiestas</button>
            </div>
            <button class="logout-button" onclick="logout()">Cerrar Sesión</button>

            <div class="products" id="products"></div>

            <div id="cart" onclick="showCart()">
                🛒
                <span id="cart-count">0</span>
            </div>
        </main>

        <footer>
            <p>&copy; 2024 Variedades Sincelejo Conta Plus. Todos los derechos reservados.</p>
        </footer>
    </div>

    <script>
        const products = {
            navidad: [
                { name: 'Árbol de Navidad', price: 79.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X0TFDDiOGlk71MI2zYuogNvVOBV7RW.png' },
                { name: 'Guirnalda Luminosa', price: 19.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3beiQYbBYxCfh6uGoYz63ONNLaI2Cq.png' },
                { name: 'Set de Adornos Navideños', price: 29.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a2Ts9R2RV1i0ER3KQ97SCUskLzKGW8.png' },
                { name: 'Calcetín Navideño', price: 14.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XSPdQEV5eZlgsvNacjaIyTCjDdy5Zv.png' },
            ],
            cumpleanos: [
                { name: 'Globos de Cumpleaños', price: 9.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6ue8JZOHRje1JPYteIK7kRJjSbfmQX.png' },
                { name: 'Velas Numéricas', price: 4.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MqbF1vSNE1TlUd8YOvOzbySWummbNZ.png' },
                { name: 'Piñata Festiva', price: 24.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gD9u9xoKVY20CEkSdMCQ4o6dYocYGc.png' },
                { name: 'Gorros de Fiesta', price: 7.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-adghwrUQxNuAZ16EiBl3M3w0k7x7AJ.png' },
            ],
            'otras-fiestas': [
                { name: 'Máscara de Carnaval', price: 14.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qyvgeNI3vQnGQlS7sGsRW7qC5wDpga.png' },
                { name: 'Serpentinas Multicolor', price: 3.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NK0DjQntrp3IwK4IdL3FFywuGTKt81.png' },
                { name: 'Set de Decoración Halloween', price: 34.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QiOMMuJtJCwkzzpLvuRJn56cujsohi.png' },
                { name: 'Confeti Brillante', price: 5.99, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bMsLTv5NtOiDWvdQ4WYscuRvIB0SMk.png' },
            ],
        
        };

        
        let currentCategory = 'navidad';
        let cart = [];

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
                    <button class="btn" onclick="addToCart('${product.name}', ${product.price})">Agregar al Carrito</button>
                `;
                productsDiv.appendChild(productDiv);
            });
        }

        function addToCart(name, price) {
            cart.push({ name, price });
            updateCartCount();
        }

        function updateCartCount() {
            const cartCount = document.getElementById('cart-count');
            cartCount.textContent = cart.length;
        }

        function showCart() {
            if (cart.length === 0) {
                alert('Agregue productos al carrito primero');
            } else {
                alert('Items en el carrito:\n' + cart.map(item => item.name).join('\n'));
            }
        }

        function login(event) {
            event.preventDefault();
            document.getElementById('login-page').style.display = 'none';
            
            document.getElementById('main-page').style.display = 'block';
            renderProducts();
        }

        function logout() {
            document.getElementById('main-page').style.display = 'none';
            document.getElementById('login-page').style.display = 'block';
            cart = [];
            updateCartCount();
        }

        // Inicialización
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('login-page').style.display = 'block';
            document.getElementById('main-page').style.display = 'none';
        });
    </script>
</body>
</html>
