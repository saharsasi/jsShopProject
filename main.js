'use strict';
let gSelectedCatagory = '';

function setCatagory(category) {
  gSelectedCatagory = category; // sets the global selected Category
  renderCatagoryPage(); // calls the function to render the page
}

function renderCatagoryPage(filter) {
  let filteredPhones = [];
  //! Selectors
  const catagoryHeader = document.querySelector('.catagoryPage__header');

  const productContainer = document.querySelector(
    '.Catagory__Products__Container'
  );
  const catagoryPage = document.querySelector('.catagoryPage');
  const catagoryTitle = document.querySelector('.catagory__title');

  if (filter) {
    const phones = products.map((catagory) => catagory.phones);
    filteredPhones = [...phones]
      .flat()
      .filter((phone) => phone.model.includes(filter));
    if (filteredPhones.length === 0) {
      productContainer.innerText = 'NO PHONES FOUND';
      return;
    }
  } else if (filter === '') {
    productContainer.innerText = 'NO PHONES FOUND';
    return;
  }

  //! styles
  resetDisplays();
  catagoryPage.style.display = 'block';

  //! Render
  const filteredProducts = products.find(
    (product) => product.catagory === gSelectedCatagory
  );

  const strHtml = filter
    ? filteredPhones.map((phone) => {
        catagoryHeader.style.display = 'none';

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
        catagoryHeader.style.display = 'flex';
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

  productContainer.innerHTML = strHtml.join(''); // join the array to string and swaps every , with a space
}
const myCart=document.getElementsByClassName('.cart__Action__Icon');
const Cart=document.querySelector('.cartPage');
const myCartItems=document.querySelector('.my__Cart__Items');
function cartClicked(){
    if(Cart.classList.contains("active")){
      Cart.classList.remove("active");
    }
    else{
      Cart.classList.add("active");
    }
  }

function renderProduct(model) {
  console.log('model', model);
  //! Selectors
  const itemPage = document.querySelector('.itemPage');
  const itemPageContainer = document.querySelector('.itemPage__Container');

  const productCatagory = products.find(
    // finds the catagory of the product
    (product) => product.catagory === gSelectedCatagory // every time takes 1 product from the array and returns it if the product.catagory is equal to the global selected catagory
  );
  const product = productCatagory.phones.find((phone) => phone.id === model); // finds the product in the array

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

              <input class="prod__QTY" type="number" value="1" name="qty" min="1" max="5" />
            </div>
            
          </label>
          <button class="add__To__Cart">Add to Cart</button>
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
  itemPage.style.display = 'block';

  let button=document.querySelector('.add__To__Cart');
  button.addEventListener("click", function addToCart(){
    let cartItems=document.querySelector('.cart__Items');
    let prodQTY=document.querySelector('.prod__QTY');
    let cartTotalItems=document.querySelector('.cart__Total__Items');
    let cartTotalPrice=document.querySelector('.cart__Total__Price');
    cartItems.innerHTML+=`
           <div class="cart__Item">
             <div class="cart__Product__Info">
             <div>
             <h3>
             Quantity:
             </h3>
             <span>${prodQTY.value}</span>
             </div>
              <div>
              <h3>
              Price:
              </h3>
              <span>${(product.price)*prodQTY.value}</span>
              </div>
             </div>
             <div class="cart__Product__Img">
               <img src=${product.imgUrl}>
             </div>
             
           </div>
         </div>

    </div>

  </div>`;
  cartTotalItems.innerText=(+cartTotalItems.innerText+(+prodQTY.value));
  cartTotalPrice.innerText=(+cartTotalPrice.innerText+(+(product.price)*(+prodQTY.value)));
  myCartItems.innerText='('+cartTotalItems.innerText+')';  
  })
}

function resetDisplays() {
  const itemPage = document.querySelector('.itemPage');
  const catagoryPage = document.querySelector('.catagoryPage');
  const cartPage=document.querySelector('.cartPage');

  // cartPage.style.display='none';
  itemPage.style.display = 'none';
  catagoryPage.style.display = 'none';
  
}


