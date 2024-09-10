const initialState = {
    added: false,
  };
  
  const wishListReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_WISHLIST":
        return {
          ...state,
          added: !added,
        };
      default:
        return state;
    }
  };
  
export default wishListReducer