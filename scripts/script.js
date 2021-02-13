window.addEventListener('DOMContentLoaded', () => {
  //fetch data if not previously fetched
  /*if(localStorage.getItem("allProducts") == null){
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => localStorage.setItem("allProducts", JSON.stringify(data)))
  }*/

  fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => localStorage.setItem("allProducts", JSON.stringify(data)))

  //retrieve the list of objects
  let theProducts = JSON.parse(localStorage.getItem("allProducts"));

  //create the product list
  let itemList = document.getElementById('product-list');
  let counter = document.getElementById('cart-count');

  //iterate through the product list to add products
  for (product of theProducts){
      let curProd = document.createElement('product-item');

      curProd.imgSrc = product.image;
      curProd.imgAlt = product.title;
      curProd.titleSet = product.title;
      curProd.priceSet = product.price;
      curProd.buttonSet = product.id;

      if(localStorage.getItem(product.id) == "true"){
        curProd.buttonInner = "Remove from Cart";
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
      }
      else{
        curProd.buttonInner = "Add to Cart";
      }

      itemList.appendChild(curProd);
      curButton = curProd.buttonGet;
      curButton.addEventListener("click", () => handleCart(curProd));
  }

  function handleCart(curProd){
    let curButton = curProd.buttonGet;
    alert(curButton.innerHTML);
    if (curButton.innerHTML == "Add to Cart")
    { 
      counter.innerHTML = parseInt(counter.innerHTML) + 1;
      curProd.buttonInner = "Remove from Cart";
      localStorage.setItem(curProd.IDGet, true);
    }
    else{
      counter.innerHTML = parseInt(counter.innerHTML) - 1;
      curProd.buttonInner = "Add to Cart";
      localStorage.setItem(curProd.IDGet, false);
    }
  };

});