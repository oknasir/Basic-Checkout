/**
 * CartController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  submit: async (req, res) => {

    let inputs = req.allParams();

    let ids = [];
    inputs.product.map(prod => {
      ids.push(prod.id);
    });

    let products = await Product.find({id: ids});

    products.map(prod => {
      inputs.product.map(pro => {
        if (prod.id == pro.id) {
          prod.quantity = pro.quantity;
        }
      });
    });

    req.session.products = products;

    return res.redirect(sails.getUrlFor('CartController.checkout'));

  },


  checkout: async (req, res) => {

    if (!req.session.products) {
      return res.redirect(sails.getUrlFor('PageController.home'));
    }

    return res.view('pages/checkout', {title: 'Final Checkout', products: req.session.products});

  },


  submitOrder: async (req, res) => {

    let inputs = req.allParams();

    if (!req.session.products) {
      return res.redirect(sails.getUrlFor('PageController.home'));
    }

    let _data = [];
    req.session.products.map(product => {
      _data.push({
        product: product.id,
        quantity: product.quantity,
        name: inputs.name,
        email: inputs.email,
        address: inputs.address,
      });
    });

    await Order.createEach(_data);

    return res.redirect(sails.getUrlFor('PageController.orders'));

  }


};

