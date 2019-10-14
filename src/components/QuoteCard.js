import React, {Component} from 'react';
import './QuoteCard.css';

class QuoteCard extends Component {
  state = {
    favorite: false
  }
  isFavorite = () => {
    this.setState({ favorite: !this.state.favorite })
  }
  
  render () {
    return (
      <figure className="QuoteCard">
        <img
          src={this.props.image}
          alt={this.props.character}
        />
        <figcaption>
          <blockquote>
            {this.props.quote}
          </blockquote>
          <p>
            <cite>{this.props.character}</cite>
            <span 
              className={this.state.favorite ? 'is-favorite' : ''}
              onClick={this.isFavorite}
            >&#9733;
            </span>
          </p>
        </figcaption>
      </figure>
    );
  }
}

export default QuoteCard;