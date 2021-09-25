import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent'
import { useEffect } from 'react'
import { getProducts } from '../redux/actions/productActions'

const ProductListing = () => {
  const products = useSelector(globalState => globalState.allProducts.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div className='ui grid container' style={{ marginTop: '100px', padding: '0 20px' }}>
      {products.map(product => (
        <ProductComponent key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductListing
