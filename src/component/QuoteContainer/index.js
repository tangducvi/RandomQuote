import React, {Component} from 'react';
import {changeQuote, fetchQuotes} from "../../actions";
import {connect} from "react-redux";
import './style.css'
import Quote from "../Quote";
import Footer from "../Footer";
import Header from "../Header";

class QuoteContainer extends Component {

  componentDidMount() {
    this.props.fetchQuotes()
  }

  changeQuote = () => {
    let index = Math.ceil(Math.random()*101)
    let quoteArray = this.props.quote.quotes
    this.props.changeQuote(quoteArray[index])
  }

  render() {
    const {quote} = this.props
    return (
      <div className="quote-container">
        <Header/>
        <Quote quote = {quote}/>
        <Footer quote = {quote}/>
        <button className="change-quote" onClick={this.changeQuote}>Change quote!</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quote: state.fetchQuotes
  }
}

const mapDispatchToProp = dispatch => {
  return {
    fetchQuotes : () => {
      dispatch(fetchQuotes())
    },

    changeQuote: (quote) => {
      dispatch(changeQuote(quote))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(QuoteContainer);