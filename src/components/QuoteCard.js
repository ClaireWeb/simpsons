import React from 'react';
import './QuoteCard.css';

function QuoteCard(props) {
  return (
    <figure className="QuoteCard">
      <img
        src={props.img}
        alt={props.fullname}
      />
      <figcaption>
        <blockquote>
          {props.quote}
        </blockquote>
        <cite>{props.fullname}</cite>
      </figcaption>
    </figure>
  );
}

export default QuoteCard;