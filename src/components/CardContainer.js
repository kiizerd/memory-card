import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';
import shuffle from '../helpers/shuffle.js'
import './styles/CardContainer.css'

const CardContainer = ({ cards, cardClicked }) => {
  const [shuffled, setShuffled] = useState(cards)

  return (
    <div className="Card-Container">
      {shuffled.map((card, index) =>
        <Card
          key={index}
          content={card.shape}
          background={card.background}
          contentColor={card.shapeColor}
          onClick={() => {
            const newShuffled = cards.slice()
            shuffle(newShuffled)
            setShuffled(newShuffled);
            cardClicked(card)
          } }
        />
      )}
    </div>
  )
}

CardContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  cardClicked: PropTypes.func
}

export default CardContainer