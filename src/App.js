import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux'
import Counter from './Counter'

const App = () => (
  <Provider store={store}>
    <Counter/>
  </Provider>
)

export default App
