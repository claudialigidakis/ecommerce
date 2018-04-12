function addToCartEventHandler(cart){
  return function(item){
    cart.addItemToCart(item)
    cart.render()
  }
}

const myCart = new CartList(
                      document.querySelector('.cart')
                    )

const myProducts = new ProductList(
                        products, // from products.js
                        document.querySelector('.products'),
                        addToCartEventHandler(myCart)
                      )

// start rendering page
myProducts.render()
