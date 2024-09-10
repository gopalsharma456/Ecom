const addToWishList = (payload)=>{
    return{
        type: "ADD_TO_WISHLIST",
        payload: payload
    }
}

const removeFromWishList = (productId) =>{
    return{
        type: "REMOVE_FROM_WISHLIST",
        payload: { id: productId },
    }
}

export { 
    addToWishList,
    removeFromWishList
}