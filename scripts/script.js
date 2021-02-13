window.addEventListener('DOMContentLoaded', () => {
  //fetch data if not previously fetched
  if(localStorage.getItem("allProducts") == null){
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => localStorage.setItem("allProducts", JSON.stringify(data)))
  }

  //retrieve the list of objects
  let theProducts = JSON.parse(localStorage.getItem("allProducts"));

  //create the product list
  let itemList = document.getElementById('product-list');

  //iterate through the product list to add products
  for (product of theProducts){
      let curProd = document.createElement('product-item');

      curProd.imgSrc = product.image;
      curProd.imgAlt = product.title;
      curProd.titleSet = product.title;
      curProd.priceSet = product.price;
      curProd.buttonSet = product.id;
      //curProd.buttonInner = "Add to Cartgukhkjuyuk";

      itemList.appendChild(curProd);
      //console.log(document.getElementById(String(product.id)));
      curButton = curProd.buttonGet;
      curButton.addEventListener("click", () => handleCart(curProd));
  }

  function handleCart(curProd){
    let curButton = curProd.buttonGet;
    alert(curButton.innerHTML);
    let counter = document.getElementById('cart-count');
    if (curButton.innerHTML == "Add to Cart")
    { 
      counter.innerHTML = parseInt(counter.innerHTML) + 1;
      curProd.buttonInner = "Remove from Cart";
    }
    else{
      counter.innerHTML = parseInt(counter.innerHTML) - 1;
      curProd.buttonInner = "Add to Cart";
    }
  };

});