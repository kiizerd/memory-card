# React Memory Game
A card clicking memory game made with React.  
See how many times you can click a unique card, without clicking the same card twice.

Made with `create-react-app`.

Pretty simple game made with all React Functional Components.  
Game logic and state are handled by the `App` component.

The cards that comprise the game are randomly generated as simple objects in the `cardFactory` helper function.  
`cardFactory` generates a list of unique cards from a few arrays of possible property values.  
Current properties are, `shape`, `shapeColor`, and `backgroundColor`.

The generated card objects are then passed as a prop to the `CardContainer` component which composes a `Card` component for each given card object. `Card` components are then shuffled, and stored in the `CardContainer` component's state.  
`Card`'s are shuffled every time a card is clicked and are only rebuilt when the passed prop containing uncomposed card objects has changed, indicating that the has game reset.

## Todo
---
 - Center scoreboard
 - Add a message when the game has been reset
 - Move `Score` inside `Header` component 
