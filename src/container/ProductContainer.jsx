import React from "react";
import ProductList from "../components/ProductList";
import Product from "../pages/Product";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addToCart } from "../store/actions/cartAction";

class ProductContainer extends React.Component {
  constructor() {
    super();

    // this.state = {
    //   products: [],
    //   cartCount:
    //     localStorage.getItem("cartCount") == null
    //       ? 0
    //       : JSON.parse(localStorage.getItem("cartCount").length),
    //   wishListed: false,
    //   cart: [],
    // };

    this.getProducts = this.getProducts.bind(this);
    // this.handleAddToCart = this.handleAddToCart.bind(this);
    // this.handleWishList = this.handleWishList.bind(this);
  }

  // componentDidMount() {
  //   console.log("mount");
  //   this.getProducts();
  // }

  // componentDidUpdate() {
  //   console.log("update");
  // }

  getProducts() {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data });
      });
  }

  // handleAddToCart(product) {
  //   this.setState(
  //     (prevState) => ({ 
  //       cartCount: prevState.cartCount + 1 
  //     }),
  //     () => {
  //       localStorage.setItem("cartCount", this.state.cartCount);
  //     }
  //   );
  //   console.log(this.state.products);
  // }

  // handleWishList(id) {
  //   this.setState(
  //     (prevState) => ({ wishListed: !prevState.wishListed }),
  //     () => {
  //       localStorage.setItem("wishListed", this.state.wishListed);
  //     },
  //     console.log(this.state.wishListed)
  //   );
  // }

  

  render() {
    // const { products, cartCount } = this.state;

    return (
      <>
        <div>
          <ProductList
            // products={products}
            handleAddToCart={this.props.handleAddToCart}
            handleWishList={this.handleWishList}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log({state})
  return {
    cart: state.cartReducer.cart,
    // cartCount: state.cartReducer.cart,
    wishListed: state.wishList.added,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      handleAddToCart: addToCart,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
