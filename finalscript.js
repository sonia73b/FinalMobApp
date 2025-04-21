
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


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


function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("fashionCart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("fashionCart", JSON.stringify(cart));
  location.reload();
}

function getRecommendations() {
  const styles = [
    {
      name: "🌸 Floral Maxi Dress",
      image: "https://i.pinimg.com/236x/fd/bf/7e/fdbf7e1f594eb36783ae2797373e08ec.jpg",
      price: "$45.00"
    },
    {
      name: "👚 Blush Pink Crop Top",
      image: "https://i.pinimg.com/236x/cb/73/a5/cb73a52aacf5ddde8bbfa0959a29f027.jpg",
      price: "$28.00"
    },
    {
      name: "👜 Rose Gold Handbag",
      image: "https://i.pinimg.com/236x/e0/e8/94/e0e8949198ecc37173ecf16272e04b41.jpg",
      price: "$55.00"
    },
    {
      name: "👖 High-Waisted Jeans",
      image: "https://i.pinimg.com/474x/46/72/bb/4672bb178455df86834f41186d345e57.jpg",
      price: "$35.00"
    },
    {
      name: "👠 Nude Heels",
      image: "https://i.pinimg.com/236x/2b/3b/6e/2b3b6ea5d1d8eb321b2084899254054b.jpg",
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
