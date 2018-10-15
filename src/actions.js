const addNewQuote = (quote) => {
  return {
    type: 'NEW_QUOTE',
    quote
  }
}

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'NEW_QUOTE':
      return prevState
  }
}
