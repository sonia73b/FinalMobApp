// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Load and display cart items from localStorage
window.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("collection-container");
  let cart = JSON.parse(localStorage.getItem("fashionCart")) || [];

  if (cart.length === 0) {
    container.innerHTML = "<p style='width: 100%; text-align: center;'>No items in your collection yet.</p>";
    return;
  }

  cart.forEach((item, index) => {
    const product = document.createElement("div");
    product.classList.add("product");
    product.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>${item.price}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    container.appendChild(product);
  });
});

// Remove item and refresh
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("fashionCart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("fashionCart", JSON.stringify(cart));
  location.reload();
}

// Recommendations (for homepage)
function getRecommendations() {
  const styles = [
    {
      name: "🌸 Floral Maxi Dress",
      image: "https://images.pexels.com/photos/14884691/pexels-photo-14884691.jpeg",
      price: "$45.00"
    },
    {
      name: "👚 Blush Pink Crop Top",
      image: "https://images.pexels.com/photos/6311585/pexels-photo-6311585.jpeg",
      price: "$28.00"
    },
    {
      name: "👜 Rose Gold Handbag",
      image: "https://images.pexels.com/photos/161956/accessory-bag-bag-and-accessories-bangle-161956.jpeg",
      price: "$55.00"
    },
    {
      name: "👖 High-Waisted Jeans",
      image: "https://images.pexels.com/photos/5325586/pexels-photo-5325586.jpeg",
      price: "$35.00"
    },
    {
      name: "👠 Nude Heels",
      image: "https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg",
      price: "$60.00"
    }
  ];

  const randomPicks = styles.sort(() => 0.5 - Math.random()).slice(0, 3);

  const output = document.getElementById("output");
  output.innerHTML = randomPicks
    .map(item => `
      <div style="margin-bottom: 20px; text-align: center;">
        <img src="${item.image}" alt="${item.name}" style="width:150px; border-radius:8px;" />
        <p><strong>${item.name}</strong><br>${item.price}</p>
      </div>
    `)
    .join("");
}