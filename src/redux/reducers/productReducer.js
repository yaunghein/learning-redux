import { ACTION_TYPES } from '../constants/actionTypes'

const initialState = {
  products: [],
  selectedProduct: {},
}

export const productReducer = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.GET_PRODUCTS:
      return { ...prevState, products: payload }
    case ACTION_TYPES.SELECTED_PRODUCT:
      return { ...prevState, selectedProduct: payload }
    case ACTION_TYPES.REMOVE_SELECTED_PRODUCT:
      return { ...prevState, selectedProduct: {} }
    default:
      return prevState
  }
}
