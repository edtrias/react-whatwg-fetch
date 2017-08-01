import React from 'react';
import HttpService from '../../services/http-service'
import './app.css';

//components
import Product from '../product/product';

//services
const http = new HttpService();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {products: []};

    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);

    this.loadData()

  }

  loadData() {
    let self = this;
    http.getProducts().then(products => {
      self.setState({products: products})
    }, err => {
      console.log('It failed');
    });
  }

  productList = () => {
    const list = this.state.products.map((product) => {
      return (
        <div className="col-sm-4" key={product._id}>
          <Product title={product.title} price={product.price} imgUrl={product.imgUrl} />
        </div>
      )
    })
    return (list);
  }

  render() {
    return (

      <div className="container-fluid App-main">
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              {this.productList()}
            </div>
          </div>
          <div className="col-sm-4">
          </div>
        </div>

      </div>
    )
  }
}

export default App;
