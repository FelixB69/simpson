import React from 'react';

function QuoteCard({quote}) {
  return (
    quote && (
      <div>
        <img src={quote.image} alt={quote.character} />
        <ul>
          <li>Character: {quote.character}</li>
          <li>Quote: {quote.quote}</li>
      
        </ul>
      </div>
    )
  );
}

export default QuoteCard;