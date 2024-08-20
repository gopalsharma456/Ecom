import React from "react";
import ProductList from "../components/ProductList";
import Product from "../pages/Product";

class ProductContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      cartCount:
        localStorage.getItem("cartCount") == null
          ? 0
          : JSON.parse(localStorage.getItem("cartCount")),
      wishListed: false,
      // cart : []
    };

    this.getProducts = this.getProducts.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleWishList = this.handleWishList.bind(this)
  }

  componentDidMount() {
    console.log("mount");
    this.getProducts();
  }

  componentDidUpdate() {
    console.log("update");
  }

  getProducts() {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data });
      });
  }

  handleAddToCart() {
    
    this.setState(
      (prevState) => ({ cartCount: prevState.cartCount + 1 }),
      () => {
        localStorage.setItem("cartCount", this.state.cartCount);
      }
    );
  }

  handleWishList(id) {
    this.setState(
      (prevState) => ({ wishListed: !prevState.wishListed }),
      () => {
        localStorage.setItem("wishListed", this.state.wishListed);
      },
      console.log(this.state.wishListed)
    );
  }

  handleGetLocalStorage() {
    this.state.cartCount = JSON.parse(localStorage.getItem("cartCount"));
    console.log(this.state.cartCount);
  }

  render() {
    const { products, cartCount } = this.state;

    return (
      <>
        <h1>
          Products <span> Cart Count: {cartCount}</span>
        </h1>

        <div>
          <ProductList
            products={products}
            handleAddToCart={this.handleAddToCart}
            handleWishList={this.handleWishList}
          />
        </div>
      </>
    );
  }
}

export default ProductContainer;
