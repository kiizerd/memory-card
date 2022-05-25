import React, { useState } from 'react';
import Header from './components/Header.js';
import Score from './components/Score.js';
import CardContainer from './components/CardContainer.js';
import deepEquality from './helpers/deepEquality.js';
import cardFactory from './helpers/cardFactory.js';

function App() {
  const [current, setCurrent] = useState(0);
  const [high, setHigh] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [cards, setCards] = useState(cardFactory(14));

  const isClickedCardUnique = (card) => {
    let result = true
    clicked.forEach((clickedCard) => {
      if (deepEquality(card, clickedCard)) {
        result = false
      }
    });
    return result;
  };

  const resetGame = () => {
    setCurrent(0);
    setClicked([]);
    setCards(cardFactory(14));
  };

  const incrementScore = () => {
    if (current + 1 >= high) setHigh(current + 1);
    if ((current + 1) % 14 === 0) { 
      setCards(cardFactory(14));
      setClicked([])
    }
    setCurrent(current + 1);
  };

  const cardClicked = (card) => {
    setClicked((oldClicked) => {
      if (isClickedCardUnique(card)) {
        incrementScore()
        return [...oldClicked, card]
      } else {
        resetGame()
        return oldClicked
      }
    })
  };

  return (
    <div className="App">
      <Header/>
      <Score high={high} current={current}/>
      <CardContainer cards={cards} cardClicked={cardClicked}/>
    </div>
  );
}

export default App;
