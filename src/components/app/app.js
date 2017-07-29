import React from 'react';
import HttpService from '../../services/http-service'

const http = new HttpService();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);

    this.loadData();
  }

  loadData() {
    http.getProducts().then(products => {
      console.log(products);
    }, err => {
      console.log('It failed');
    });
  }

  render() {
    return (
      <div>
        <h1>Hola</h1>
      </div>
    )
  }
}

export default App;
