import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='ui fixed menu'>
      <div className='ui container center' style={{ padding: '20px' }}>
        <Link to='/'>
          <h2>ReduxShop</h2>
        </Link>
      </div>
    </div>
  )
}

export default Header
