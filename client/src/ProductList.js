import React from "react";
import Product from "./components/ Product";
import "../src/CSS/App.css";


class ProductList extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <Product />
          </div>
        </header>
      </div>
    );
  }
}

export default ProductList;
