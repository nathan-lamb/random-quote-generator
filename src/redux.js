import * as React from 'react'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import App from './App'

const addNewQuote = (quote) => {
  return {
    type: 'NEW_QUOTE',
    quote
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEW_QUOTE':
      return state
  }
}

const mapStateToProps = (state) => {
  return {
    author: state,
    quote: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addQuote: (quote) => {
      dispatch(addNewQuote(quote))
    }
  }
}

const store = createStore(reducer)

const Container = connect(mapStateToProps, mapDispatchToProps)(App)

class AppWrapper extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}

export default AppWrapper
