import React from 'react';
import './QuoteCard.css';

function QuoteCard(props) {
  return (
    <figure className="QuoteCard">
      <img
        src={props.image}
        alt={props.name}
      />
      <figcaption>
        <blockquote>
          {props.quote}
        </blockquote>
        <cite>{props.name}</cite>
      </figcaption>
    </figure>
  );
}

export default QuoteCard;