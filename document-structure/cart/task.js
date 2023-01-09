const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

products.forEach(product => {
  product.querySelectorAll('.product__quantity-control').forEach(btn => {
    btn.addEventListener('click', () => {
      let count = Number.parseInt(product.querySelector('.product__quantity-value').innerText);
      switch (btn.innerText) {
        case ("-"):
          count--;
          (count < 1) ? count = 1 : count;
          product.querySelector('.product__quantity-value').innerText = count;
          break;
        case ("+"):
          count++;
          product.querySelector('.product__quantity-value').innerText = count;
          break;
      }
    })
  })

  product.querySelector('.product__add').addEventListener('click', () => {
    let productId = product.dataset.id;
    let productImgSrc = product.getElementsByTagName('img')[0].getAttribute('src');
    let setProducts = cartProducts.childElementCount;
    let countAdd = Number.parseInt(product.querySelector('.product__quantity-value').innerText);
    let itemFlag = true;

    if (setProducts > 0) {
      let productList = cartProducts.querySelectorAll('.cart__product');
      for (let productItem of productList) {
        if (productItem.dataset.id === productId) {
          let cartProductCount = Number.parseInt(productItem.querySelector('.cart__product-count').innerText);
          productItem.querySelector('.cart__product-count').innerText = cartProductCount + countAdd;
          itemFlag = false;
        }
      }
    }

    if (itemFlag) {
      cartProducts.insertAdjacentHTML('beforeEnd',
        `<div class="cart__product" data-id="${productId}">
        <img class="cart__product-image" src="${productImgSrc}">
        <div class="cart__product-count">${countAdd}</div>
        </div>`
      );
    }

    product.querySelector('.product__quantity-value').innerText = 1;
  })
})

