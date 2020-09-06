const initState = {
  products: [],
  product: null
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload
      };

    case "GET_PRODUCT":
      return {
        ...state,
        product: action.payload
      };

    default:
      return state;
  }
};

export default productReducer;