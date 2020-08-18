/**
 * PageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {


  home: async (req, res) => {

    let products = await Product.find({});

    return res.view('pages/homepage', {title: 'Products List', products});

  }


};

