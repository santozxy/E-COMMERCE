$(".owl-carousel").owlCarousel({
  margin: 10,
  loop: true,
  items: 1,
  autoplay: true,
  lazyLoad: true,
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
  const sidebar = document.getElementById("sidebar");
  const header = document.querySelector("header");
  const body = document.querySelector("main");
  sidebar.style.visibility = "visible";
  header.style.opacity = "0.4";
  header.style.zIndex = "-1";
  body.style.opacity = "0.4";
  body.style.zIndex = "-1";
  document.querySelector("body").style.overflowY = "hidden";
  document.AddEventListener("click", clickHandler);
}

function closeSideBar() {
  const sidebar = document.getElementById("sidebar");
  const header = document.querySelector("header");
  const body = document.querySelector("main");
  sidebar.style.visibility = "hidden";
  header.style.opacity = "1";
  header.style.zIndex = "0";
  body.style.opacity = "1";
  body.style.zIndex = "0";
  document.querySelector("body").style.overflowY = "visible";
  document.removeEventListener("click", clickHandler);
}

function clickHandler(event) {
  const clickedElement = event.target;
  if (!sidebar.contains(clickedElement) && clickedElement !== sidebar) {
    closeSideBar();
  }
}

const products = [
  {
    id: "0",
    img: "../assets/products/product1.jpg",
    title: "Headphone 5.1",
    value: "R$ 789,99",
    rating: "4.9",
  },
  {
    id: "1",
    img: "../assets/products/product2.jpg",
    title: "TWS Pulse",
    value: "R$ 179,99",
    rating: "4.7",
  },
  {
    id: "2",
    img: "../assets/products/product3.jpg",
    title: "TWS Airbuds",
    value: "R$ 149,99",
    rating: "4.4",
  },
  {
    id: "3",
    img: "../assets/products/product4.jpg",
    title: "Earphone 7.1",
    value: "R$ 299,99",
    rating: "4.8",
  },
  {
    id: "4",
    img: "../assets/products/product5.jpg",
    title: "Headphone 5.1",
    value: "R$ 969,99",
    rating: "4.4",
  },
  {
    id: "5",
    img: "../assets/products/product6.jpg",
    title: "Headset 7.1",
    value: "R$ 469,99",
    rating: "4.4",
  },
  {
    id: "6",
    img: "../assets/products/product7.jpg",
    title: "TWS Gamer",
    value: "R$ 249,99",
    rating: "4.7",
  },
  {
    id: "7",
    img: "../assets/products/product8.jpg",
    title: "Headset Gamer",
    value: "R$ 459,90",
    rating: "4.6",
  },
  {
    id: "8",
    img: "../assets/products/product9.jpg",
    title: "Headset Gamer",
    value: "R$ 169,99",
    rating: "4.8",
  },
  {
    id: "9",
    img: "../assets/products/product10.jpg",
    title: "TWS APTX",
    value: "R$ 1169,99",
    rating: "4.9",
  },
  {
    id: "10",
    img: "../assets/products/product11.jpg",
    title: "TWS APTX",
    value: "R$ 1169,99",
    rating: "4.9",
  },
  {
    id: "11",
    img: "../assets/products/product12.jpeg",
    title: "Headphone JBL",
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
        <button class="btn-favorite" name ="Favorite button"><i class="fa-solid fa-heart favorite"></i></button>
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
