import { ACTION_TYPES } from '../constants/actionTypes'
import axios from 'axios'

export const getProducts = () => {
  return dispatch => {
    axios.get('http://fakestoreapi.com/products').then(resp =>
      dispatch({
        type: ACTION_TYPES.GET_PRODUCTS,
        payload: resp.data,
      })
    )
  }
}

export const selectedProduct = productId => {
  return dispatch => {
    axios.get(`http://fakestoreapi.com/products/${productId}`).then(resp =>
      dispatch({
        type: ACTION_TYPES.SELECTED_PRODUCT,
        payload: resp.data,
      })
    )
  }
}

export const removeSelectedProduct = () => {
  return {
    type: ACTION_TYPES.REMOVE_SELECTED_PRODUCT,
  }
}
