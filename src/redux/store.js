import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

export const ReduxStoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
