$(".owl-carousel").owlCarousel({
  margin: 10,
  loop: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  fadeOut: true,
});
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".btn-color");
  const icon = button.querySelector("i");
  let isLightMode = false;

  button.addEventListener("click", function () {
    isLightMode = !isLightMode;
    const newBgColor = isLightMode ? "#f4f4f4" : "#131313";
    const newTertiaryColor = isLightMode ? "#000" : "#fff";
    const newIconClass = isLightMode ? "fa-moon" : "fa-sun";

    document.documentElement.style.setProperty("--bg", newBgColor);
    document.documentElement.style.setProperty("--terciary", newTertiaryColor);
    icon.classList.remove(isLightMode ? "fa-sun" : "fa-moon");
    icon.classList.add(newIconClass);
  });
});

function openSideBar() {
  document.getElementById("sidebar").style.visibility = "visible";
}

function closeSideBar() {
  document.getElementById("sidebar").style.visibility = "hidden";
}

const products = [
  {
    brand: "Sony",
    img: "../assets/products/product1.jpg",
    title: "Headphone 5.1",
    value: "R$ 789,99",
    rating: "4.9",
  },
  {
    img: "../assets/products/product2.jpg",
    title: "TWS Pulse",
    value: "R$ 179,99",
    rating: "4.7",
  },
  {
    img: "../assets/products/product3.jpg",
    title: "TWS Airbuds",
    value: "R$ 149,99",
    rating: "4.4",
  },
  {
    img: "../assets/products/product4.jpg",
    title: "Earphone 7.1",
    value: "R$ 299,99",
    rating: "4.8",
  },
  {
    img: "../assets/products/product5.jpg",
    title: "Headphone 5.1",
    value: "R$ 969,99",
    rating: "4.4",
  },
  {
    img: "../assets/products/product6.jpg",
    title: "Headset 7.1",
    value: "R$ 469,99",
    rating: "4.4",
  },
  {
    img: "../assets/products/product7.jpg",
    title: "TWS Gamer",
    value: "R$ 249,99",
    rating: "4.7",
  },
  {
    img: "../assets/products/product8.jpg",
    title: "Headset Gamer",
    value: "R$ 459,90",
    rating: "4.6",
  },
  {
    img: "../assets/products/product9.jpg",
    title: "Headset Gamer",
    value: "R$ 169,99",
    rating: "4.8",
  },
  {
    img: "../assets/products/product10.jpg",
    title: "TWS APTX",
    value: "R$ 1169,99",
    rating: "4.9",
  },
];

const productContainer = document.getElementById("product-container");

products.forEach((product) => {
  const productCard = document.createElement("div");
  let isState = false;

  productCard.innerHTML = `
    <div class="card">
    <a href="#">
      <div class="card-img">
        <img class="img" src="${product.img}" alt="${product.title}">
      </div>
      </a>
      <div class="card-info">
        <h3 class="card-title">${product.title}</h3>
        <div class="card-description">
          <ul class="stars">
            <li class="star"><i class="fa-solid fa-star"></i></li>
            <li class="star"><i class="fa-solid fa-star"></i></li>
            <li class="star"><i class="fa-solid fa-star"></i></li>
            <li class="star"><i class="fa-solid fa-star"></i></li>
            <li class="star"><i class="fa-solid fa-star"></i></li>
            <li>
              <p class="rating">${product.rating}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-btn">
        <button class="btn-cart">
          <p class="value">${product.value} <i class="fa-solid fa-cart-shopping"></i></p>
        </button>
        <button class="btn-favorite" id="btn-favorite"><i class="fa-solid fa-heart favorite"></i></button>
      </div>
    </div>
  `;

  productContainer.appendChild(productCard);
  productCard
    .querySelector(".btn-favorite")
    .addEventListener("click", function () {
      isState = !isState;
      const heartIcon = isState
        ? (productCard.querySelector(".btn-favorite i").style.color = "#a80e1a")
        : (productCard.querySelector(".btn-favorite i").style.color = "#ccc");
    });
});