var radio = document.querySelector(".manual-btn");
var cont = 1;

document.getElementById("radio1").checked = true;

setInterval(() => {
  proxImg();
}, 5000);

function proxImg() {
  cont++;
  if (cont > 3) {
    cont = 1;
  }
  document.getElementById("radio" + cont).checked = true;
}

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
    img: "assets/products/product1.jpg",
    title: "Headset Gamer",
    value: "R$ 199,99",
    rating: "4.5",
  },
  {
    brand: "Bose",
    img: "assets/products/product2.jpg",
    title: "Headset Gamer",
    value: "R$ 249,99",
    rating: "4.7",
  },
  {
    brand: "JBL",
    img: "assets/products/product3.jpg",
    title: "Headphone",
    value: "R$ 79,99",
    rating: "4.2",
  },
  {
    brand: "Bose",
    img: "assets/products/product4.jpg",
    title: "Auricular Bose",
    value: "R$ 299,99",
    rating: "4.8",
  },
  {
    brand: "Apple",
    img: "assets/products/product5.jpg",
    title: "Earphone",
    value: "R$ 169,99",
    rating: "4.4",
  },
  {
    brand: "Apple",
    img: "assets/products/product6.jpg",
    title: "Earphone",
    value: "R$ 169,99",
    rating: "4.4",
  },
  {
    brand: "Apple",
    img: "assets/products/product7.jpg",
    title: "Earphone",
    value: "R$ 169,99",
    rating: "4.4",
  },
  {
    brand: "Apple",
    img: "assets/products/product8.jpg",
    title: "Earphone",
    value: "R$ 169,99",
    rating: "4.4",
  },
  {
    brand: "Apple",
    img: "assets/products/product9.jpg",
    title: "Earphone",
    value: "R$ 169,99",
    rating: "4.4",
  },
  {
    brand: "Apple",
    img: "assets/products/product10.jpg",
    title: "Earphone",
    value: "R$ 169,99",
    rating: "4.4",
  },
];

const productContainer = document.getElementById("product-container");

products.forEach((product) => {
  const productCard = document.createElement("a");
  productCard.href = "#";

  productCard.innerHTML = `
    <div class="card">
      <div class="card-img">
        <img class="img" src="${product.img}" alt="${product.title}">
      </div>
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
        <button class="btn-favorite"><i class="fa-solid fa-heart"></i></button>
      </div>
    </div>
  `;

  productContainer.appendChild(productCard);
});
