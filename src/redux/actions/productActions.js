export const getProducts = data => ({
  type: "GET_PRODUCTS",
  payload: data
});

export const getProduct = product => ({
  type: "GET_PRODUCT",
  payload: product
});