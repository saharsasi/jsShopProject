"use strict";
let gSelectedCatagory = "";
let gCart = { total: 0, items: [] };
const phones = products.map((catagory) => catagory.phones);
const flattedPhones = [...phones].flat();
const storedCart = localStorage.getItem("cart");

document.addEventListener("DOMContentLoaded", checkLocalStorage);
document.addEventListener("DOMContentLoaded", renderFavorites);

const gFavoriteProducts = [
  "iphone13ProMax",
  "galaxys22Ultra",
  "p40Pro",
  "xiaomi12Pro",
];
const myCart = document.getElementsByClassName(".cart__Action__Icon");
const Cart = document.querySelector(".cartPage");
const myCartItems = document.querySelector(".my__Cart__Items");

function setCatagory(category) {
  gSelectedCatagory = category; // sets the global selected Category
  renderCatagoryPage(); // calls the function to render the page
}

function renderCatagoryPage(filter) {
  let filteredPhones = [];
  //! Selectors
  const catagoryHeader = document.querySelector(".catagoryPage__header");

  const productContainer = document.querySelector(
    ".Catagory__Products__Container"
  );
  const catagoryPage = document.querySelector(".catagoryPage");
  const catagoryTitle = document.querySelector(".catagory__title");

  const phones = products.map((catagory) => catagory.phones);
  if (filter) {
    filteredPhones = [...phones]
      .flat()
      .filter((phone) => phone.model.includes(filter));
    if (filteredPhones.length === 0) {
      productContainer.innerText = "NO PHONES FOUND";
      return;
    }
  } else if (filter === "") {
    filteredPhones = [...phones].flat();
    return;
  }

  //! styles
  resetDisplays();
  catagoryPage.style.display = "block";

  //! Render
  const filteredProducts = products.find(
    (product) => product.catagory === gSelectedCatagory
  );

  const strHtml = filter
    ? filteredPhones.map((phone) => {
        catagoryHeader.style.display = "none";

        return `<article class="product">
    <img
      src=${phone.imgUrl} />
    <h1 class="product__title">${phone.model}</h1>
    <h3>
     ${phone.productInfo}
    </h3>
    <h2 class="product__price">
      Price: <span class="product__price__value">${phone.price}</span>
    </h2>
    <button  onclick=renderProduct("${phone.id}")>Buy</button>
  </article>`;
      })
    : filteredProducts.phones.map((phone) => {
        catagoryHeader.style.display = "flex";
        catagoryTitle.innerText = filteredProducts.catagory;

        return `<article class="product">
    <img
      src=${phone.imgUrl} />
    <h1 class="product__title">${phone.model}</h1>
    <h3>
     ${phone.productInfo}
    </h3>
    <h2 class="product__price">
      Price: <span class="product__price__value">${phone.price}</span>
    </h2>
    <button  onclick=renderProduct("${phone.id}")>Buy</button>
  </article>`;
      });

  productContainer.innerHTML = strHtml.join(""); // join the array to string and swaps every , with a space
}

function cartClicked() {
  if (Cart.classList.contains("active")) {
    Cart.classList.remove("active");
  } else {
    Cart.classList.add("active");
  }
}

function renderProduct(model) {
  //! Selectors
  const itemPage = document.querySelector(".itemPage");
  const itemPageContainer = document.querySelector(".itemPage__Container");

  const product = flattedPhones.find((phone) => phone.id === model); // finds the product in the array

  const strHtml = ` 
  <div class="itemPage__Border">

  <div class="itemPage__Product__Container">
    <div class="itemPage__productImage">
      <img src=${product.imgUrl} alt="">
    </div>
    <div class="itemPage__Product__Info">
      <h1 class="Product__Title">${product.model}</h1>
      <div class="info">
        <h3>Brand: <span>${gSelectedCatagory}</span></h3>
        <h3>Product Code: <span>${makeid()}</span></h3>
        <h3>Availability: <span>In Stock</span></h3>
        <hr>
        <h1 class="Info__Price">${product.price} $</h1>

        <div class="actions">
          <label for="qty">
            QTY:
            <div class="qty__container">

              <input  class="prod__QTY" type="number" value="1" name="qty" min="1" max="5" />
            </div>
            
          </label>
          <button class="add__To__Cart" onclick="addToCart('${
            product.id
          }')">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
  <div class="itemPage__Description">
  <header>Description</header>
  <div>
    <h3>Lorem, ipsum dolor.
    </h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, illum!
    </p>
  </div>
  <div>
    <h3>Lorem, ipsum dolor.
    </h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, illum!
    </p>
  </div>
  <div>
    <h3>Lorem, ipsum dolor.
    </h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, illum!
    </p>
  </div>
</div>
  </div>`;
  itemPageContainer.innerHTML = strHtml;

  resetDisplays();
  itemPage.style.display = "block";
}

function addToCart(productId) {
  const currqty = document.querySelector(".prod__QTY").value;
  const isAlreadyInCart = gCart.items.find((item) => item.id === productId);
  if (!isAlreadyInCart) {
    gCart.items.push({ id: productId, qty: +currqty });
  } else {
    isAlreadyInCart.qty += +currqty;
  }

  renderCart();

  return;
}

function renderCart() {
  const elCartTotal = document.querySelector(".cart__Total__Price");
  const elCartTotalItems = document.querySelector(".cart__Total__Items");
  const elCartItems = document.querySelector(".cart__Items");
  const elcartItemsQty = document.querySelector(".my__Cart__Items");
  const totalPrice = gCart.items.map((item) => {
    let price = flattedPhones.find((product) => product.id === item.id).price;
    return price * item.qty;
  });
  elCartTotal.innerText = totalPrice.reduce((acc, curr) => acc + curr, 0);
  elCartTotalItems.innerText = gCart.items.length;
  elcartItemsQty.innerText = gCart.items.length;

  const strHtml = gCart.items
    .map((item) => {
      const product = flattedPhones.find((product) => product.id === item.id);
      return `<div class="cart__Item">
    <div class="cart__Product__Info">
    <div>
    <span class="cart__Item__Title">${product.model}</span>
    <h3>
    Quantity:
    </h3>
    <span>${item.qty}</span>
    </div>
     <div>
     <h3>
     Price:
     </h3>
     <span>${product.price * item.qty}</span>
     </div>
     <button class="remove__Item" onclick="removeFromCart('${
       product.id
     }')">Remove</button>
    </div>
    <div class="cart__Product__Img">
      <img src=${product.imgUrl}>
    </div>
    
  </div>
</div>

</div>

</div>`;
    })
    .join("");

  elCartItems.innerHTML = strHtml;
  localStorage.setItem("cart", JSON.stringify(gCart));
}
function checkLocalStorage() {
  const localCart = JSON.parse(localStorage.getItem("cart"));
  console.log(localCart);
  localCart ? (gCart = localCart) : { total: 0, items: [] };
  renderCart()
}

function testStorage() {
  console.log(storedCart);
}
function removeFromCart(productId) {
  const itemIdx = gCart.items.findIndex((item) => item.id === productId);
  gCart.items.splice(itemIdx, 1);
  renderCart();
}

function clearCart() {
  gCart.items = [];
  renderCart();
}

function resetDisplays() {
  const itemPage = document.querySelector(".itemPage");
  const catagoryPage = document.querySelector(".catagoryPage");
  const favoritesPage = document.querySelector(".favorites");

  favoritesPage.style.display = "none";
  itemPage.style.display = "none";
  catagoryPage.style.display = "none";
}

function renderFavorites() {
  resetDisplays();
  const favoritesPage = document.querySelector(".favorites");
  favoritesPage.style.display = "flex";
  const elFavorites = document.querySelector(".favorite__Products");
  const favoritePhones = gFavoriteProducts.map((phone) =>
    flattedPhones.find((flatPhone) => flatPhone.id === phone)
  );
  const strHtml = favoritePhones
    .map((phone) => {
      return `<article class="product">
    <img
      src=${phone.imgUrl} />
    <h1 class="product__title">${phone.model}</h1>
    <h3>
     ${phone.productInfo}
    </h3>
    <h2 class="product__price">
      Price: <span class="product__price__value">${phone.price}</span>
    </h2>
    <button onclick=renderProduct("${phone.id}")>Buy</button>
  </article>`;
    })
    .join("");
  elFavorites.innerHTML = strHtml;
}
let slideIndex = 0;
function nextPicture() {
  let currPic = document.querySelector(".activeButton");
  let sliderPics = document.querySelectorAll(".slider");
  for (let i = 0; i < sliderPics.length; i++) {
    if (sliderPics[i].classList.contains("activeButton")) {
      sliderPics[i].classList.remove("activeButton");
    }
  }
  slideIndex++;
  if (slideIndex == sliderPics.length) {
    slideIndex = 0;
  }
  sliderPics[slideIndex].classList.add("activeButton");
}

function previousPicture() {
  let currPic = document.querySelector(".activeButton");
  let sliderPics = document.querySelectorAll(".slider");
  for (let i = 0; i < sliderPics.length; i++) {
    if (sliderPics[i].classList.contains("activeButton")) {
      sliderPics[i].classList.remove("activeButton");
    }
  }
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = sliderPics.length - 1;
  }
  sliderPics[slideIndex].classList.add("activeButton");
}
