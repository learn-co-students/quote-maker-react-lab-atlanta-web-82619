import uuid from 'uuid';

export default (state = [], action) => {
  

  switch (action.type) {
    case 'ADD_QUOTE':
      return [
        ...state,
        {
          ...action.quote
        }
      ];

    case 'REMOVE_QUOTE':
      const idx = state.findIndex(quote => quote.id === action.quoteId)
      return [
        ...state.slice(0, idx), 
        ...state.slice(idx + 1)
      ];

    case 'UPVOTE_QUOTE':
      return state.map(quote => {
        if (quote.id === action.quoteId) {
          return {...quote, votes: quote.votes + 1};
        }
        else {
          return quote;
        }
      });;

    case 'DOWNVOTE_QUOTE':
      return state.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0) {
          return {...quote, votes: quote.votes - 1};
        }
        else {
          return quote;
        }
      });;

    default:
      return state;
  }
}
