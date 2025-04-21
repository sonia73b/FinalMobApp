// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Add to cart using localStorage
function addToCart(name, img, price) {
  const item = { name, img, price };
  let cart = JSON.parse(localStorage.getItem("fashionCart")) || [];
  cart.push(item);
  localStorage.setItem("fashionCart", JSON.stringify(cart));
  alert(`${name} added to your collection!`);
}
