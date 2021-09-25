import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './containers/Header'
import ProductListing from './containers/ProductListing'
import ProductDetails from './containers/ProductDetails'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={ProductListing} />
          <Route exact path='/product/:productId' component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  )
}
export default App
