import React from "react";
import data from "./data.json";
import './ProductList.css'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import addToCart from "../store/actions/cartAction";

 function ProductList(props) {
  const { products, handleAddToCart, handleWishList } = props;

  return (
    <>
      <div className="col-md-4 product-row">
        <div className="card product-card" style={{display: 'flex',flexWrap: "wrap", justifyContent: "space-between"}}>
          {data.map((values, index) => {
            return (
              <div className="card-container" key={`${values.title} ${index}`} style={{padding: "5px", textAlign:"center", width:"250px", marginBottom: "5px", border: "1px solid black"}}>
                <img
                  src={values.category.image || values.images}
                  className="card-img-top"
                  alt="Product Name"
                  style={{ width: "10rem" }}
                />
                <div className="card-body card-description">
                  <h5 className="card-title">{values.title}</h5>

                  <small className="price-tag">{values.price}$</small>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        // onClick={handleWishList}
                      >
                        Add to Wishlist
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAddToCart(values)}
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    // count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators(
    {
      // addToCartAction : addToCart
    },
    dispatch
  )
}



export default connect(mapStateToProps ,mapDispatchToProps)(ProductList);
