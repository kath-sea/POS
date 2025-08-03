// ===== POS SYSTEM JAVASCRIPT =====

// ===== PRODUCT DATA =====
const PRODUCTS = [
    // Men's Shoes
    {
        id: 1,
        name: "Nike Air Max 270",
        brand: "Nike",
        price: 8499,
        category: "men",
        sizes: ["7", "8", "9", "10", "11", "12"],
        stock: 15,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        description: "Comfortable running shoes with Air Max technology"
    },
    {
        id: 2,
        name: "Adidas Ultraboost 22",
        brand: "Adidas",
        price: 12999,
        category: "men",
        sizes: ["8", "9", "10", "11", "12"],
        stock: 12,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
        description: "Premium running shoes with Boost technology"
    },
    {
        id: 3,
        name: "Jordan Air 1 Retro High",
        brand: "Nike",
        price: 15999,
        category: "men",
        sizes: ["7", "8", "9", "10", "11"],
        stock: 8,
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop",
        description: "Classic basketball shoes with Air technology"
    },
    {
        id: 4,
        name: "Converse Chuck Taylor",
        brand: "Converse",
        price: 3999,
        category: "accessories",
        sizes: ["6", "7", "8", "9", "10", "11", "12"],
        stock: 25,
        image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop",
        description: "Timeless canvas sneakers"
    },
    {
        id: 5,
        name: "Vans Old Skool",
        brand: "Vans",
        price: 4499,
        category: "accessories",
        sizes: ["7", "8", "9", "10", "11", "12"],
        stock: 18,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop",
        description: "Classic skate shoes with side stripe"
    },

    // Women's Shoes
    {
        id: 6,
        name: "Nike Air Force 1 '07",
        brand: "Nike",
        price: 6999,
        category: "women",
        sizes: ["5", "6", "7", "8", "9", "10"],
        stock: 20,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
        description: "Iconic lifestyle sneakers"
    },
    {
        id: 7,
        name: "Adidas Stan Smith",
        brand: "Adidas",
        price: 5499,
        category: "women",
        sizes: ["5", "6", "7", "8", "9", "10"],
        stock: 16,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
        description: "Classic tennis shoes"
    },
    {
        id: 8,
        name: "Puma RS-X",
        brand: "Puma",
        price: 6499,
        category: "women",
        sizes: ["6", "7", "8", "9", "10"],
        stock: 14,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
        description: "Retro-inspired running shoes"
    },
    {
        id: 9,
        name: "New Balance 574",
        brand: "New Balance",
        price: 5999,
        category: "women",
        sizes: ["5", "6", "7", "8", "9", "10"],
        stock: 22,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
        description: "Comfortable lifestyle sneakers"
    },
    {
        id: 10,
        name: "Reebok Classic",
        brand: "Reebok",
        price: 3999,
        category: "women",
        sizes: ["6", "7", "8", "9", "10"],
        stock: 19,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
        description: "Timeless athletic shoes"
    },

    // Kids' Shoes
    {
        id: 11,
        name: "Nike Kids Revolution",
        brand: "Nike",
        price: 2999,
        category: "women",
        sizes: ["1", "2", "3", "4", "5", "6"],
        stock: 30,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
        description: "Comfortable kids running shoes"
    },
    {
        id: 12,
        name: "Adidas Kids Cloudfoam",
        brand: "Adidas",
        price: 3499,
        category: "women",
        sizes: ["1", "2", "3", "4", "5", "6"],
        stock: 25,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
        description: "Soft and comfortable kids shoes"
    },
    {
        id: 13,
        name: "Puma Kids Softride",
        brand: "Puma",
        price: 2799,
        category: "men",
        sizes: ["2", "3", "4", "5", "6"],
        stock: 28,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
        description: "Lightweight kids athletic shoes"
    },

    // Sports Shoes
    {
        id: 14,
        name: "Nike ZoomX Vaporfly",
        brand: "Nike",
        price: 24999,
        category: "men",
        sizes: ["7", "8", "9", "10", "11", "12"],
        stock: 6,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        description: "Elite racing shoes for marathon runners"
    },
    {
        id: 15,
        name: "Adidas Predator Edge",
        brand: "Adidas",
        price: 18999,
        category: "men",
        sizes: ["8", "9", "10", "11", "12"],
        stock: 10,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
        description: "Professional soccer cleats"
    },
    {
        id: 16,
        name: "Under Armour Curry 9",
        brand: "Under Armour",
        price: 12999,
        category: "men",
        sizes: ["7", "8", "9", "10", "11", "12"],
        stock: 12,
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop",
        description: "Basketball shoes with superior traction"
    },

    // Casual Shoes
    {
        id: 17,
        name: "Sperry Top-Sider",
        brand: "Sperry",
        price: 4999,
        category: "menl",
        sizes: ["7", "8", "9", "10", "11", "12"],
        stock: 35,
        image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop",
        description: "Classic boat shoes"
    },
    {
        id: 18,
        name: "Crocs Classic Clog",
        brand: "Crocs",
        price: 2499,
        category: "men",
        sizes: ["6", "7", "8", "9", "10", "11", "12"],
        stock: 50,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
        description: "Comfortable and versatile clogs"
    },
    {
        id: 19,
        name: "Birkenstock Arizona",
        brand: "Birkenstock",
        price: 5999,
        category: "women",
        sizes: ["6", "7", "8", "9", "10", "11"],
        stock: 22,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
        description: "Premium comfort sandals"
    },
    {
        id: 20,
        name: "Nike Air Jordan 4",
        brand: "Nike",
        price: 18999,
        category: "men",
        sizes: ["7", "8", "9", "10", "11", "12"],
        stock: 5,
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop",
        description: "Retro basketball sneakers"
    },
    {
        id: 21,
        name: "Adidas Yeezy Boost 350",
        brand: "Adidas",
        price: 29999,
        category: "men",
        sizes: ["7", "8", "9", "10", "11", "12"],
        stock: 3,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
        description: "Limited edition lifestyle sneakers"
    },
    {
        id: 22,
        name: "Nike Zoom Fly 4",
        brand: "Nike",
        price: 9999,
        category: "sports",
        sizes: ["7", "8", "9", "10", "11", "12"],
        stock: 15,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        description: "Performance running shoes"
    },
    {
        id: 23,
        name: "Adidas Terrex Free Hiker",
        brand: "Adidas",
        price: 15999,
        category: "men",
        sizes: ["8", "9", "10", "11", "12"],
        stock: 8,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
        description: "Hiking shoes with Boost technology"
    },
    {
        id: 24,
        name: "Nike Kids Air Jordan 1",
        brand: "Nike",
        price: 5999,
        category: "men",
        sizes: ["1", "2", "3", "4", "5", "6"],
        stock: 18,
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop",
        description: "Kids basketball shoes"
    },
    {
        id: 25,
        name: "Adidas Kids Gazelle",
        brand: "Adidas",
        price: 3999,
        category: "men",
        sizes: ["1", "2", "3", "4", "5", "6"],
        stock: 20,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
        description: "Classic kids sneakers"
    },
    {
        id: 26,
        name: "Nike Air Max 90",
        brand: "Nike",
        price: 8999,
        category: "women",
        sizes: ["5", "6", "7", "8", "9", "10"],
        stock: 12,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
        description: "Iconic lifestyle sneakers"
    },
    {
        id: 27,
        name: "Adidas NMD R1",
        brand: "Adidas",
        price: 11999,
        category: "women",
        sizes: ["5", "6", "7", "8", "9", "10"],
        stock: 9,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
        description: "Modern lifestyle sneakers"
    },
    {
        id: 28,
        name: "Puma Future Rider",
        brand: "Puma",
        price: 5499,
        category: "men",
        sizes: ["6", "7", "8", "9", "10", "11", "12"],
        stock: 25,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
        description: "Retro-inspired lifestyle sneakers"
    },
    {
        id: 29,
        name: "Dr. Martens 1460",
        brand: "Dr. Martens",
        price: 8999,
        category: "men",
        sizes: ["7", "8", "9", "10", "11"],
        stock: 15,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop",
        description: "Iconic leather boots"
    },
    {
        id: 30,
        name: "Timberland 6-Inch",
        brand: "Timberland",
        price: 11999,
        category: "men",
        sizes: ["8", "9", "10", "11", "12"],
        stock: 12,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
        description: "Premium waterproof boots"
    },
    {
        id: 31,
        name: "Clarks Desert Boot",
        brand: "Clarks",
        price: 6499,
        category: "accessories",
        sizes: ["7", "8", "9", "10", "11"],
        stock: 20,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
        description: "Classic suede desert boots"
    },
    {
        id: 32,
        name: "Leather Shoe Laces",
        brand: "Premium",
        price: 299,
        category: "accessories",
        sizes: ["Standard"],
        stock: 50,
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop",
        description: "High-quality leather shoe laces"
    },
    {
        id: 33,
        name: "Shoe Cleaning Kit",
        brand: "CarePro",
        price: 899,
        category: "accessories",
        sizes: ["One Size"],
        stock: 30,
        image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop",
        description: "Complete shoe cleaning and care kit"
    },
    {
        id: 34,
        name: "Shoe Insoles",
        brand: "ComfortPlus",
        price: 599,
        category: "accessories",
        sizes: ["7", "8", "9", "10", "11", "12"],
        stock: 40,
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop",
        description: "Memory foam shoe insoles for comfort"
    },
    {
        id: 35,
        name: "Shoe Polish Set",
        brand: "ShineMaster",
        price: 399,
        category: "accessories",
        sizes: ["Standard"],
        stock: 25,
        image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop",
        description: "Professional shoe polish and brush set"
    }
];

// ===== STATE MANAGEMENT =====
let currentState = {
    selectedCategory: 'all',
    searchQuery: '',
    cart: [],
    paymentAmount: '',
    currentTime: new Date()
};

// ===== UTILITY FUNCTIONS =====
function formatPrice(price) {
    return `₱ ${price.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatDate(date) {
    return date.toLocaleDateString('en-PH', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatTime(date) {
    return date.toLocaleTimeString('en-PH', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

function generateReceiptNumber() {
    return Math.floor(Math.random() * 900000) + 100000;
}

function calculateTax(amount) {
    return amount * 0.12; // 12% tax
}

function calculateTotal() {
    const subtotal = currentState.cart.reduce((total, item) => total + item.subtotal, 0);
    const tax = calculateTax(subtotal);
    return subtotal + tax;
}

// ===== PRODUCT RENDERING =====
function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    const filteredProducts = getFilteredProducts();

    // Update category tab counts
    updateCategoryCounts();

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search or category filter</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-badge">${product.category.toUpperCase()}</div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-brand">${product.brand}</p>
                <div class="product-details">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <span class="product-stock">${product.stock} in stock</span>
                </div>
                <div class="product-sizes">
                    <span class="size-label">Sizes:</span>
                    ${product.sizes.map(size => `<span class="size-badge">${size}</span>`).join('')}
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                    <i class="fas fa-plus"></i>
                    ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>
            </div>
        </div>
    `).join('');
}

function getFilteredProducts() {
    let filtered = PRODUCTS;
    
    // Filter by category
    if (currentState.selectedCategory !== 'all') {
        filtered = filtered.filter(product => product.category === currentState.selectedCategory);
    }
    
    // Filter by search query
    if (currentState.searchQuery.trim()) {
        const query = currentState.searchQuery.toLowerCase();
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.brand.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
    }
    
    return filtered;
}

function updateCategoryCounts() {
    const categories = ['all', 'men', 'women', 'kids', 'sports', 'casual'];
    
    categories.forEach(category => {
        const tab = document.querySelector(`[data-category="${category}"]`);
        if (tab) {
            const count = category === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === category).length;
            const span = tab.querySelector('span');
            if (span) {
                span.textContent = span.textContent.replace(/\s*\(\d+\)\s*$/, '') + ` (${count})`;
            }
        }
    });
}

// ===== CART MANAGEMENT =====
function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product || product.stock === 0) return;
    
    // Check if product is already in cart
    const existingItem = currentState.cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity++;
            existingItem.subtotal = existingItem.quantity * existingItem.price;
        } else {
            showNotification('Maximum stock reached for this item', 'warning');
            return;
        }
    } else {
        currentState.cart.push({
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            quantity: 1,
            subtotal: product.price,
            size: product.sizes[0] // Default to first available size
        });
    }
    
    renderCart();
    updateCartSummary();
    showNotification(`${product.name} added to cart`, 'success');
}

function removeFromCart(productId) {
    currentState.cart = currentState.cart.filter(item => item.id !== productId);
    renderCart();
    updateCartSummary();
}

function updateQuantity(productId, newQuantity) {
    const item = currentState.cart.find(item => item.id === productId);
    const product = PRODUCTS.find(p => p.id === productId);
    
    if (!item || !product) return;
    
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    if (newQuantity > product.stock) {
        showNotification('Cannot exceed available stock', 'warning');
        return;
    }
    
    item.quantity = newQuantity;
    item.subtotal = item.quantity * item.price;
    
    renderCart();
    updateCartSummary();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    
    if (currentState.cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <h3>Your cart is empty</h3>
                <p>Add some shoes to get started!</p>
            </div>
        `;
        return;
    }
    
    cartItems.innerHTML = currentState.cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-left">
                <h4 class="cart-item-name">${item.name}</h4>
                <span class="cart-item-size">Size: ${item.size}</span>
            </div>
            <div class="cart-item-right">
                <span class="cart-item-price">${formatPrice(item.subtotal)}</span>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
        </div>
    `).join('');
}

function updateCartSummary() {
    const subtotal = currentState.cart.reduce((total, item) => total + item.subtotal, 0);
    const tax = calculateTax(subtotal);
    const total = subtotal + tax;
    
    document.getElementById('subtotal').textContent = formatPrice(subtotal);
    document.getElementById('tax-amount').textContent = formatPrice(tax);
    document.getElementById('total-amount').textContent = formatPrice(total);
    
    // Update payment input if total changed
    if (currentState.paymentAmount && parseFloat(currentState.paymentAmount) < total) {
        currentState.paymentAmount = '';
        document.getElementById('payment-amount').value = '';
        updateChangeDisplay();
    }
}

function clearCart() {
    currentState.cart = [];
    currentState.paymentAmount = '';
    renderCart();
    updateCartSummary();
    document.getElementById('payment-amount').value = '';
    updateChangeDisplay();
    showNotification('Cart cleared', 'info');
}

// ===== PAYMENT PROCESSING =====
function handleNumberPad(number) {
    if (number === '.') {
        if (!currentState.paymentAmount.includes('.')) {
            currentState.paymentAmount += number;
        }
    } else {
        currentState.paymentAmount += number;
    }
    
    document.getElementById('payment-amount').value = currentState.paymentAmount;
    updateChangeDisplay();
}

function handleQuickAmount(amount) {
    currentState.paymentAmount = amount.toString();
    document.getElementById('payment-amount').value = currentState.paymentAmount;
    updateChangeDisplay();
}

function clearPayment() {
    currentState.paymentAmount = '';
    document.getElementById('payment-amount').value = '';
    updateChangeDisplay();
}

function updateChangeDisplay() {
    const paymentAmount = parseFloat(currentState.paymentAmount) || 0;
    const total = calculateTotal();
    const change = paymentAmount - total;
    
    const changeDisplay = document.getElementById('change-display');
    const changeAmount = document.getElementById('change-amount');
    
    if (paymentAmount > 0) {
        changeDisplay.style.display = 'flex';
        changeAmount.textContent = formatPrice(Math.max(0, change));
    } else {
        changeDisplay.style.display = 'none';
    }
}

function completeTransaction() {
    if (currentState.cart.length === 0) {
        showNotification('Cart is empty', 'warning');
        return;
    }
    
    const paymentAmount = parseFloat(currentState.paymentAmount) || 0;
    const total = calculateTotal();
    
    if (paymentAmount < total) {
        showNotification('Insufficient payment amount', 'error');
        return;
    }
    
    // Generate receipt
    const receipt = {
        number: generateReceiptNumber(),
        date: currentState.currentTime,
        items: currentState.cart,
        subtotal: currentState.cart.reduce((total, item) => total + item.subtotal, 0),
        tax: calculateTax(currentState.cart.reduce((total, item) => total + item.subtotal, 0)),
        total: total,
        payment: paymentAmount,
        change: paymentAmount - total
    };
    
    // Update stock
    currentState.cart.forEach(item => {
        const product = PRODUCTS.find(p => p.id === item.id);
        if (product) {
            product.stock -= item.quantity;
        }
    });
    
    // Clear cart and payment
    clearCart();
    
    // Show receipt
    showReceipt(receipt);
    
    // Show success notification
    showNotification('Transaction completed successfully!', 'success');
}

function cancelTransaction() {
    clearCart();
    showNotification('Transaction cancelled', 'info');
}

// ===== RECEIPT GENERATION =====
function showReceipt(receipt) {
    // Populate receipt data
    document.getElementById('receipt-number').textContent = receipt.number;
    document.getElementById('receipt-date').textContent = formatDate(receipt.date);
    document.getElementById('receipt-subtotal').textContent = formatPrice(receipt.subtotal);
    document.getElementById('receipt-tax').textContent = formatPrice(receipt.tax);
    document.getElementById('receipt-total').textContent = formatPrice(receipt.total);
    document.getElementById('receipt-cash').textContent = formatPrice(receipt.payment);
    document.getElementById('receipt-change').textContent = formatPrice(receipt.change);
    
    // Populate receipt items
    const receiptItems = document.getElementById('receipt-items');
    receiptItems.innerHTML = receipt.items.map(item => `
        <div class="receipt-item">
            <div class="receipt-item-name">${item.name} (${item.size})</div>
            <div class="receipt-item-details">
                ${item.quantity} × ${formatPrice(item.price)} = ${formatPrice(item.subtotal)}
            </div>
        </div>
    `).join('');
    
    // Show modal
    const modal = document.getElementById('receipt-modal');
    modal.classList.add('show');
}

function closeReceipt() {
    const modal = document.getElementById('receipt-modal');
    modal.classList.remove('show');
}

function printReceipt() {
    const receiptContent = document.querySelector('.receipt-modal').innerHTML;
    const printWindow = window.open('', '_blank');
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Receipt - D'Kamp Batangas</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
                .receipt-header { text-align: center; margin-bottom: 20px; }
                .receipt-item { display: flex; justify-content: space-between; margin: 5px 0; }
                .receipt-summary { border-top: 1px solid #ccc; margin-top: 20px; padding-top: 10px; }
                .receipt-row { display: flex; justify-content: space-between; margin: 5px 0; }
                .total { font-weight: bold; font-size: 1.1em; }
                @media print { body { font-size: 12px; } }
            </style>
        </head>
        <body>
            ${receiptContent}
        </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}
// ===== NOTIFICATIONS =====
function showNotification(message, type = 'info') {
    const notification = document.getElementById('success-notification');
    const icon = notification.querySelector('i');
    const text = notification.querySelector('span');
    
    // Update notification content
    text.textContent = message;
    
    // Use a single gradient background for all notifications
    const commonGradient = 'linear-gradient(135deg, #1e3a8a 0%, #a3bffa 100%)'; // Blue gradient matching the theme
    notification.style.background = commonGradient;
    
    // Update icon based on type
    switch (type) {
        case 'success':
            icon.className = 'fas fa-check-circle';
            break;
        case 'error':
            icon.className = 'fas fa-exclamation-circle';
            break;
        case 'warning':
            icon.className = 'fas fa-exclamation-triangle';
            break;
        case 'info':
            icon.className = 'fas fa-info-circle';
            break;
        case 'clear':
            icon.className = 'fas fa-trash';
            break;
        case 'cancel':
            icon.className = 'fas fa-times';
            break;
    }
    
    // Show notification
    notification.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Update category filter event listener (unchanged, uses 'info')
document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        currentState.selectedCategory = this.dataset.category;
        renderProducts();
        const categoryName = this.querySelector('span').textContent.replace(/\s*\(\d+\)\s*$/, '');
        showNotification(`Showing ${categoryName}`, 'info');
    });
});

// Update addToCart function (unchanged, uses 'success')
function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product || product.stock === 0) return;
    
    const existingItem = currentState.cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity++;
            existingItem.subtotal = existingItem.quantity * existingItem.price;
        } else {
            showNotification('Maximum stock reached for this item', 'warning');
            return;
        }
    } else {
        currentState.cart.push({
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            quantity: 1,
            subtotal: product.price,
            size: product.sizes[0]
        });
    }
    
    renderCart();
    updateCartSummary();
    showNotification(`${product.name} added to cart`, 'success');
}

// Update clearCart function (unchanged, uses 'clear')
function clearCart() {
    currentState.cart = [];
    currentState.paymentAmount = '';
    renderCart();
    updateCartSummary();
    document.getElementById('payment-amount').value = '';
    updateChangeDisplay();
    showNotification('Cart cleared', 'clear');
}

// Update cancelTransaction function (unchanged, uses 'cancel')
function cancelTransaction() {
    clearCart();
    showNotification('Transaction cancelled', 'cancel');
}

// ===== TIME UPDATES =====
function updateTime() {
    currentState.currentTime = new Date();
    document.getElementById('current-time').textContent = formatTime(currentState.currentTime);
    document.getElementById('current-date').textContent = formatDate(currentState.currentTime);
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    updateCategoryCounts(); // Initialize category counts first
    renderProducts();
    updateTime();
    
    // Set up time updates
    setInterval(updateTime, 1000);
    
    // Category filter
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Update state and re-render
            currentState.selectedCategory = this.dataset.category;
            renderProducts();
            
            // Show notification for category change
            const categoryName = this.querySelector('span').textContent;
            showNotification(`Showing ${categoryName}`, 'info');
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search');
    
    searchInput.addEventListener('input', function() {
        currentState.searchQuery = this.value;
        renderProducts();
    });
    
    clearSearchBtn.addEventListener('click', function() {
        searchInput.value = '';
        currentState.searchQuery = '';
        renderProducts();
    });
    
    // Number pad
    document.querySelectorAll('.num-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const number = this.dataset.number;
            if (number === 'clear') {
                clearPayment();
            } else {
                handleNumberPad(number);
            }
        });
    });
    
    // Quick amount buttons
    document.querySelectorAll('.quick-amount-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Check if it's a quick action button
            if (this.id === 'quick-cancel') {
                cancelTransaction();
            } else if (this.id === 'quick-print') {
                // Only show receipt if there are items in cart
                if (currentState.cart.length > 0) {
                    const receipt = {
                        items: currentState.cart,
                        subtotal: currentState.subtotal,
                        tax: currentState.tax,
                        total: currentState.total,
                        paymentAmount: currentState.paymentAmount || 0,
                        change: (currentState.paymentAmount || 0) - currentState.total,
                        receiptNumber: generateReceiptNumber(),
                        date: currentState.currentTime,
                        cashier: 'Lauren Smith'
                    };
                    showReceipt(receipt);
                } else {
                    showNotification('No items in cart to print receipt', 'warning');
                }
            } else {
                // Handle amount buttons
                const amount = parseInt(this.dataset.amount);
                handleQuickAmount(amount);
            }
        });
    });
    
    // Action buttons
    document.getElementById('clear-cart').addEventListener('click', clearCart);
    document.getElementById('clear-payment').addEventListener('click', clearPayment);
    document.getElementById('cancel-transaction').addEventListener('click', cancelTransaction);
    document.getElementById('complete-transaction').addEventListener('click', completeTransaction);
    
    // Modal close on overlay click
    document.getElementById('receipt-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeReceipt();
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Escape to close receipt modal
        if (e.key === 'Escape') {
            closeReceipt();
        }
        
        // Enter to complete transaction
        if (e.key === 'Enter' && e.ctrlKey) {
            completeTransaction();
        }
        
        // Number keys for payment input
        if (e.key >= '0' && e.key <= '9' || e.key === '.') {
            if (document.activeElement.id === 'payment-amount') {
                return; // Let the input handle it
            }
            handleNumberPad(e.key);
        }
    });
    
    // Payment input handling
    document.getElementById('payment-amount').addEventListener('input', function() {
        currentState.paymentAmount = this.value;
        updateChangeDisplay();
    });
    
    // Prevent non-numeric input in payment field
    document.getElementById('payment-amount').addEventListener('keypress', function(e) {
        if (!/[0-9.]/.test(e.key)) {
            e.preventDefault();
        }
    });
});

// ===== EXPOSE FUNCTIONS FOR HTML =====
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.clearCart = clearCart;
window.handleNumberPad = handleNumberPad;
window.handleQuickAmount = handleQuickAmount;
window.clearPayment = clearPayment;
window.completeTransaction = completeTransaction;
window.cancelTransaction = cancelTransaction;
window.showReceipt = showReceipt;
window.closeReceipt = closeReceipt;
window.printReceipt = printReceipt;
window.showNotification = showNotification;