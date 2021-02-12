// Script.js

window.addEventListener('DOMContentLoaded', () => {
  if(localStorage.getItem("allProducts") == null){
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => localStorage.setItem("allProducts", JSON.stringify(data)))
  }

  let theProducts = JSON.parse(localStorage.getItem("allProducts"));
  console.log(theProducts);
  /*
  let itemList = document.getElementById('product-list');
  for(){//loop through the array
    let prod = document.createElement('product-item');
    itemList.appendChild(prod);
  }
  */
  let itemList = document.getElementById('product-list');
  console.log(theProducts);
  for (product of theProducts){
      let curProd = document.createElement('product-item');
      
      curProd.imgSrc = product.image;
      curProd.imgAlt = product.title;
      curProd.titleSet = product.title;
      curProd.priceSet = product.price;

      itemList.appendChild(curProd);
  }

});