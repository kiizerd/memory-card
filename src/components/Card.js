import React from 'react';
import PropTypes from 'prop-types'
import './styles/Card.css'
import './styles/Shapes.css'

const Card = ({ onClick, content, contentColor, background }) => {
  return (
    <section
      onClick={onClick}
      className={`Card ${background}`}>
        <div className={`shape ${content} ${contentColor}`}/>
    </section>
  )
}

Card.propTypes = {
  onClick: PropTypes.func,
  content: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  contentColor: PropTypes.string.isRequired
}

export default Card;
