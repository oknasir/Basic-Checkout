import React from 'react';
import ReactDOM from 'react-dom';

import Cart from './Cart';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.setState({products: $('#example').data('products')});
  }

  addToCart(e) {
    debugger
    console.log(e.target.value);
  }


  render() {
    return (
      <>
        <Cart product={this.state.products}/>

        <table>
          <thead>
          <th>Name</th>
          </thead>
          <tbody>
          {this.state.products.map(product =>
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>
                <button onClick={this.addToCart} value={product.id}>Add to cart</button>
              </td>
            </tr>
          )}
          </tbody>
        </table>
      </>
    );
  }
}


if (document.getElementById('example')) {
  ReactDOM.render(<Example/>, document.getElementById('example'));
}
