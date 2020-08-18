module.exports = {


  friendlyName: 'Products',


  description: 'Products something.',


  fn: async function () {

    sails.log('Running custom shell script... (`sails run products`)');

    await Product.createEach([
      {
        title: 'First',
        price: 10
      }, {
        title: 'Second',
        price: 12
      }, {
        title: 'Third',
        price: 15
      }, {
        title: 'Fourth',
        price: 12.36
      }
    ]);

  }


};

