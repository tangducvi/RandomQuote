import * as Types from '../constant/ActionTypes'
import { fetchQuotes as fetchQuoteApi } from '../services/quoteApi'

export const fetchQuotes = ()  => {
  return {
    type: Types.FETCH_QUOTES,
    payload: fetchQuoteApi()
  }
}

export const changeQuote = (quote) => {
  return {
    type: Types.CHANGE_QUOTE,
    payload: quote
  }
}