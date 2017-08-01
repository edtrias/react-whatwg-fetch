import React from 'react';
import './wishlist.css';
import DataService from '../../services/data-service';

import ProductCondensed from '../product-condensed/product-condensed';

class WishList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {wishList: [
      {
        title: "Test title",
        price: 23.99,
        _id: "alksdhdghfdasi"
      },
      {
        title: "Tururur",
        price: 4.54,
        _id: "alasdsi"
      },
      {
        title: "Paprpapra",
        price: 9283,
        _id: "alksdhasi"
      },
    ]}

    this.createWishList = this.createWishList.bind(this);

  }

  createWishList = () => {
    const list = this.state.wishList.map((product) => {
      return (
        <ProductCondensed product={product} key={product._id} />
      )
    })
    return (list);
  }

  render() {
    return (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">Wish List</h4>
          <ul className="list-group">
            {this.createWishList()}
          </ul>
        </div>
      </div>
    )
  }
}

export default WishList;
