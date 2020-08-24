import React from 'react';

const cart = ({...product}) => {
  let products = [];

  products.push(product);
  let index = products.indexOf(product => products.title === product);
  if (index) {
    products.splice(product => products.title === product);
  }
};


export default Cart;
