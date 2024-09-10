const addToCart = (payload) => {
  // console.log("called", payload)
  return {
    type: "ADD_TO_CART",
    payload: payload,
  };
};

const removeFromCart = (productId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: { id: productId },
  };
};

export {
    addToCart,
    removeFromCart
}