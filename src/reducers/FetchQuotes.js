import {CHANGE_QUOTE, FETCH_QUOTES} from "../constant/ActionTypes";

let initial = {
  quote: {},
  quotes: {}
};

const fetchQuotes = (state = initial, action) => {
  switch(action.type) {
    case FETCH_QUOTES:
      const indexRandom = Math.ceil(Math.random()*(action.payload.quotes?.length - 1));
      return {
        ...state,
        quote: action.payload.quotes[indexRandom],
        quotes: action.payload.quotes,
      }

    case CHANGE_QUOTE:
      return {
        ...state,
        quote: action.payload
      }
    default:
      return state
  }
}

export default fetchQuotes

