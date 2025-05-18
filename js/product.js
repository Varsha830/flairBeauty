const cart = [];
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

// Handle Add to Cart
document.querySelectorAll('.product-card button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.product-card');
    const name = card.querySelector('p').textContent;
    const price = 199; // fixed for now
    const imageSrc = card.querySelector('img').src;

    // Check if item already in cart
    const alreadyInCart = cart.find(item => item.name === name);
    if (alreadyInCart) {
      alert('Item already in cart!');
      return;
    }

    const item = { name, price, imageSrc };
    cart.push(item);
    updateCartUI();
  });
});

// Update Cart UI
function updateCartUI() {
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${item.imageSrc}" style="width: 50px; vertical-align: middle; margin-right: 10px;">
      <strong>${item.name}</strong><br>Price: Rs ${item.price}
      <br>
      <button style="
        margin-top: 5px;
        color: white;
        background-color:rgb(211, 152, 50);
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;
      " onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(li);
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}

// Remove from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

// Toggle Cart Sidebar
function toggleCart() {
  document.getElementById('cart-sidebar').classList.toggle('open');
}

// Category Filter
const categoryButtons = document.querySelectorAll('.categories button');
const productCards = document.querySelectorAll('.product-card');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    productCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
