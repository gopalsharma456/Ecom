import React from "react";
import data from "./data.json";

export default function ProductList(props) {
  const { products, handleAddToCart, handleWishList } = props;

  return (
    <>
      <div className="col-md-4 product-row">
        <div className="card product-card" style={{display: 'flex',flexWrap: "wrap", justifyContent: "space-between"}}>
          {products.map((values, index) => {
            return (
              <div key={`${values.title} ${index}`} style={{padding: "5px", textAlign:"center", width:"250px", marginBottom: "5px", border: "1px solid black"}}>
                <img
                  src={values.category.image}
                  className="card-img-top"
                  alt="Product Name"
                  style={{ width: "5rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{values.title}</h5>
                  {/* <p className="card-text">{values.category.name}</p> */}

                  <small className="price-tag">{values.price}$</small>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={handleWishList}
                      >
                        Add to Wishlist
                      </button>
                      <button
                        type="button"
                        onClick={handleAddToCart}
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
