var app = new Vue({
    el: '#app',
    data: {
      products: [
        { name: 'Sản phẩm 1', price: 10 },
        { name: 'Sản phẩm 2', price: 15 },
        { name: 'Sản phẩm 3', price: 20 }
      ],
      cart: []
    },
    methods: {
      addToCart: function(product) {
        this.cart.push(product);
      }
    }
  });
  