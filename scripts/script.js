// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
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
  for (product of theProducts){
      let curProd = document.createElement('product-item');
      //call a function that sets all attributes
      //curProd.setProdAtt(product.id, product.title, product.price, 
                        //product.description, product.image, product.category)
      itemList.appendChild(curProd);
  }

});