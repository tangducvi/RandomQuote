import React, {Component} from 'react';
import './style.css'

class Footer extends Component {
  openURL(url) {
    window.open(
      url,
      "Share",
      "width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0"
    );
  }

  inIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  tumble = () => {
    let currentQuote = this.props.quote.quote.quote;
    let currentAuthor = this.props.quote.quote.author;
    if (!this.inIframe()) {
      this.openURL(
        "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
        encodeURIComponent(currentAuthor) +
        "&content=" +
        encodeURIComponent(currentQuote) +
        "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
      );
    }
  }

  twitter = () => {
    let currentQuote = this.props.quote.quote.quote;
    let currentAuthor = this.props.quote.quote.author;
    if (!this.inIframe()) {
      this.openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor))
    }
  }
  render() {
    return (
      <div>
        <div className="icons">
          <div>
            <a id="twitter" onClick = {this.twitter}><i className="fab fa-twitter"/></a>
          </div>
          <div>
            <a id="tumble" onClick = {this.tumble}><i className="fab fa-tumblr"/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;