import deepEquality from './deepEquality.js';

const cardFactory = (count) => {
  const cards = []
  const rand = (max) => Math.floor(Math.random() * max)
  const isCardUnique = (card) => {
    let result = true;
    cards.forEach((builtCard) => {
      if (deepEquality(card, builtCard)) result = false;
    })
    return result
  }
  const buildCard = () => {
    const shapes = ['square', 'circle', 'triangle']
    const bgColors = ['black', 'blue', 'red', 'green', 'yellow']
    const shapeColors = ['red', 'blue', 'green', 'yellow']
    const shapeIndex = rand(shapes.length)
    const bgIndex = rand(bgColors.length)
    let shapeColorIndex = rand(shapeColors.length)
    while (shapeColors[shapeColorIndex] === bgColors[bgIndex]) {
      shapeColorIndex = rand(shapeColors.length)
    }

    return {
      shape: shapes[shapeIndex],
      background: bgColors[bgIndex],
      shapeColor: shapeColors[shapeColorIndex],
    }
  }

  while (cards.length < count) {
    const card = buildCard()
    if (isCardUnique(card)) {
      cards.push(card)
    }
  }

  return cards
}

export default cardFactory