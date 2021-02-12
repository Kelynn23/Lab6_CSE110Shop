// product-item.js
//constructor 
class ProductItem extends HTMLElement {
  constructor() {
    //alert("reached constructor");
    super(); 

    // Attach a shadow root
    let shadowRoot = this.attachShadow({mode: 'open'});
    let style = document.createElement('style');
    let li = document.createElement('li');
    li.setAttribute("class", "product");
    let image = document.createElement('img');
    image.setAttribute("width",200);
    let titlePara = document.createElement('p');
    titlePara.setAttribute("class", "title");
    let pricePara = document.createElement('p');
    pricePara.setAttribute("class", "price");
    let button = document.createElement('button');
    button.setAttribute("onclick", "alert('Added to Cart!')");
    button.innerHTML = 'Add to Cart';

    // attach the created elements to the shadow dom
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(li);
    li.appendChild(image);
    li.appendChild(titlePara);
    li.appendChild(pricePara);
    li.appendChild(button);
    
    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }
    `;
  }

  //image setter
  set imgSrc(src){
    this.shadowRoot.querySelector("img").src = src;
  };

  set imgAlt(alt){
    this.shadowRoot.querySelector("img").alt = alt;
  }

  //title setter
  set titleSet(title){
    this.shadowRoot.querySelector(".title").innerHTML = title;
  };

  //price setter
  set priceSet(price){
    this.shadowRoot.querySelector(".price").innerHTML = '$'+price;
  };

};


function connectedCallback() {
  console.log('Custom square element added to page.');
  updateStyle(this);
};

customElements.define('product-item', ProductItem);

//for button: define function inside script.js, set that function that modifies cart +memory stuff
// to be event listener