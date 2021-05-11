import React, {Component} from 'react';
import './style.css'

class Quote extends Component {
  render() {
    const {quote} = this.props
    return (
      <>
        <h3 className= "author" id="author">{quote.quote.author}</h3>
        <p className="quote" id="quote">{quote.quote.quote}</p>
      </>
    );
  }
}

export default Quote;