/**
 * Order.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    product: {
      model: 'Product'
    },

    quantity: {
      type: 'number'
    },

    name: {
      type: 'string'
    },

    email: {
      type: 'string'
    },

    address: {
      type: 'string'
    }

  },

};

