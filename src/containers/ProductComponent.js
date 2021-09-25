import { Link } from 'react-router-dom'

const ProductComponent = ({ product }) => {
  const { id, image, title, price, category } = product

  return (
    <div className='four wide column'>
      <Link to={`/product/${id}`}>
        <div className='ui link cards'>
          <div className='card'>
            <div
              className='image'
              style={{
                background: 'white',
                display: 'grid',
                placeItems: 'center',
                padding: '20px',
                overflow: 'hidden',
              }}>
              <img src={image} alt={title} style={{ width: 'auto', height: '200px' }} />
            </div>
            <div className='content'>
              <div className='header'>{title}</div>
              <div className='meta prics'>$ {price}</div>
              <div className='meta'>$ {category}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductComponent
