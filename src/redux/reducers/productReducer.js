const initState = {
  products: [],
  product: null
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload
      };

    case "FETCH_PRODUCT":
      return {
        ...state,
        product: action.payload
      };

    default:
      return state;
  }
};

export default productReducer;