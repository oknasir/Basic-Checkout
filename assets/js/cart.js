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


  $('#cart-items').on('click', 'a[data-index]', function () {
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
  }).on('click', 'a[data-checkout]', function () {
    localStorage.removeItem('cartItems');
    $('#cart-form').submit();
  });

  cartRender();

  function cartRender() {
    let items = localStorage.getItem('cartItems');
    if (items) {
      items = JSON.parse(items);
    }
    let html = '';
    let cartInputs = '';
    $.each(items, function (key, prod) {
      html += `<a class="dropdown-item" data-index="${key}" href="javascript:">${prod.title} <span class="badge badge-danger">${prod.quantity}</span></a>`;
      cartInputs += `<input type="hidden" name="product[${key}][id]" value="${prod.id}"><input type="hidden" name="product[${key}][quantity]" value="${prod.quantity}">`;
    });

    if (items.length) {
      html += `<a class="dropdown-item text-light text-center bg-danger" data-checkout href="javascript:">Checkout</a>`;
    }

    $('#cart-items').html(html);
    $('#cart-values').html(cartInputs);
  }
});
