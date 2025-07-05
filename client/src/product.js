
//product 

const products = [
  { image: "pic1.png", title: "Shirt", price: "₱149.00" },
  { image: "pic2.png", title: "Short", price: "₱149.00" },
  { image: "pic3.png", title: "Shoes", price: "₱149.00" },
  { image: "pic4.png", title: "Jacket", price: "₱149.00" },
  { image: "pic5.png", title: "Iphone 16", price: "₱149.00" },
  { image: "pic6.png", title: "DJI Osmo Pocket 3", price: "₱149.00" },
  { image: "pic7.png", title: "Smart TV", price: "₱149.00" },
  { image: "pic8.png", title: "Camera", price: "₱149.00" },
  { image: "pic9.png", title: "Sofa", price: "₱149.00" },
  { image: "pic10.png", title: "Table", price: "₱149.00" },
  { image: "pic11.png", title: "Chair", price: "₱149.00" },
  { image: "pic12.png", title: "Lamp", price: "₱149.00" }
];

const cartSVG = `
<svg width="24" height="24" viewBox="0 0 43 43">
  <path d="M2 6H7.5L11.5 29H36.5L41 13H10" stroke="#DDCF98" stroke-width="4" fill="#DDCF98"/>
  <circle cx="15" cy="36" r="3" fill="#DDCF98"/>
  <circle cx="33" cy="36" r="3" fill="#DDCF98"/>
</svg>
`;

const heartSVG = `
<svg width="24" height="24" viewBox="0 0 43 43" fill="#DDCF98">
  <path d="M37.3383 8.25968C36.4232 7.34415 35.3367 6.61788 34.1408 6.12237C32.945 5.62686 
  31.6632 5.37183 30.3687 5.37183C29.0743 5.37183 27.7925 5.62686 26.5966 6.12237C25.4008 6.61788 
  24.3143 7.34415 23.3992 8.25968L21.5 10.1588L19.6008 8.25968C17.7524 6.41123 15.2453 5.37278 12.6312 
  5.37278C10.0171 5.37278 7.51011 6.41123 5.66166 8.25968C3.81321 10.1081 2.77477 12.6152 2.77477 15.2293C2.77476 
  17.8434 3.81321 20.3504 5.66166 22.1988L21.5 38.0372L37.3383 22.1988C38.2539 21.2837 38.9801 20.1972 39.4756 19.0014C39.9711 
  17.8055 40.2262 16.5237 40.2262 15.2293C40.2262 13.9348 39.9711 12.653 39.4756 11.4572C38.9801 10.2613 38.2539 9.17478 37.3383 8.25968Z" 
  stroke="#DDCF98" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const grid = document.getElementById('products-grid');
grid.innerHTML = products.map(product => `
  <div class="product-card">
    <img src="${product.image}" alt="${product.title}" class="product-image">
    <div class="product-info">
      <div class="product-title">${product.title}</div>
      <div class="product-price">${product.price}</div>
      <div class="product-actions">
        <button class="product-cart">${cartSVG}</button>
        <button class="product-heart">${heartSVG}</button>
      </div>
    </div>
  </div>
`).join('');



document.addEventListener('DOMContentLoaded', function() {
  const cartHeaderSVG = `
    <button class="cart-header-btn" id="cartHeaderBtn" title="View Cart">
      <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24">
  <path stroke="#DDCF98" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 
  2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
</svg>
        <span class="header-icon-badge" id="cartBadge">0</span>

    </button>
  `;

  
  const headerIcons = document.querySelector('.header-icons');
  if (headerIcons) {
    headerIcons.insertAdjacentHTML('afterbegin', cartHeaderSVG);
  }
});



//ham icon

const menuIcon = document.getElementById('menuIcon');
const navMenu = document.getElementById('navMenu');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  navMenu.classList.toggle('active');
});


let cartCount = 0;

// Listen for clicks on all "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', function() {
  // Update cart badge function
  function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) badge.textContent = cartCount;
  }

  // Attach event listeners to all add-to-cart buttons
  document.querySelectorAll('.product-cart').forEach(function(btn) {
    btn.addEventListener('click', function() {
      cartCount++;
      updateCartBadge();
    });
  });

  // Initialize badge on page load
  updateCartBadge();
});