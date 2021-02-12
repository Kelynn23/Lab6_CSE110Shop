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
    let titlePara = document.createElement('p');
    titlePara.setAttribute("class", "title");
    let pricePara = document.createElement('p');
    pricePara.setAttribute("class", "price");
    let button = document.createElement('button');
    button.setAttribute("onclick", "alert('Added to Cart!')");

    // attach the created elements to the shadow dom
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(li);
    li.appendChild(image);
    li.appendChild(titlePara);
    li.appendChild(pricePara);
    li.appendChild(button);
    
    style.textContent = `
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

  set imgSrc(src){
    this.shadowRoot.querySelector("img").src=src;
  };
};


function connectedCallback() {
  console.log('Custom square element added to page.');
  updateStyle(this);
};

customElements.define('product-item', ProductItem);

//for button: define function inside script.js, set that function that modifies cart +memory stuff
// to be event listener