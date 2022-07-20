'use strict';
let gSelectedCatagory = '';

function setCatagory(category) {
  gSelectedCatagory = category; // sets the global selected Category
  renderCatagoryPage(); // calls the function to render the page
}

function renderCatagoryPage() {
  //! Selectors
  const productContainer = document.querySelector(
    '.Catagory__Products__Container'
  );
  const catagoryPage = document.querySelector('.catagoryPage');
  const catagoryTitle = document.querySelector('.catagory__title');

  //! styles
  resetDisplays();
  catagoryPage.style.display = 'block';

  //! Render
  const filteredProducts = products.find(
    (product) => product.catagory === gSelectedCatagory
  );

  catagoryTitle.innerText = filteredProducts.catagory;
  const strHtml = filteredProducts.phones.map((phone) => {
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

function renderProduct(model) {
  //! Selectors
  const itemPage = document.querySelector('.itemPage');
  const itemPageContainer = document.querySelector('.itemPage__Container');
  const catagoryPage = document.querySelector('.catagoryPage');

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

              <input type="number" value="1" name="qty" min="1" max="5" />
            </div>
            
          </label>
          <button>Add to Cart</button>
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
}

function resetDisplays() {
  const itemPage = document.querySelector('.itemPage');
  const catagoryPage = document.querySelector('.catagoryPage');

  itemPage.style.display = 'none';
  catagoryPage.style.display = 'none';
}
