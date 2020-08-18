jQuery(document).ready(function ($) {
  $('.add-to-cart').click(function () {
    var $e = $(this);
    var product = $e.data('product');

    let items = localStorage.getItem('cartItems');

    if (items) {
      items = JSON.parse(items);
    } else {
      items = [];
    }

    let index = -1;
    $.each(items, function (key, prod) {
      if (prod.id === product.id) {
        index = key;
      }
    });

    if (index === -1) {
      product.quantity = 1;
      items.push(product);
    } else {
      items[index].quantity++;
    }

    localStorage.setItem('cartItems', JSON.stringify(items));

    cartRender();
  });


  $('#cart-items').on('click', 'a', function () {
    var $e = $(this);
    let items = localStorage.getItem('cartItems');
    if (items) {
      items = JSON.parse(items);

      items[$e.data('index')].quantity--;

      if (items[$e.data('index')].quantity <= 0) {
        items.splice($e.data('index'), 1);
      }

      localStorage.setItem('cartItems', JSON.stringify(items));

      cartRender();
    }
  });

  cartRender();

  function cartRender() {
    let items = localStorage.getItem('cartItems');
    if (items) {
      items = JSON.parse(items);
    }
    let html = '';
    $.each(items, function (key, prod) {
      html += `<a class="dropdown-item" data-index="${key}" href="javascript:">${prod.title} <span class="badge badge-danger">${prod.quantity}</span></a>`;
    });
    $('#cart-items').html(html);
  }
});
