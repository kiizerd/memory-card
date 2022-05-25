import React from 'react';
import PropTypes from 'prop-types';
import './styles/Score.css';

const Score = ({ current, high }) => {
  return (
    <section className="Score">
      <p className="current">Current score: {current || 0}</p>
      <p className="high">High score: {high || 0}</p>
    </section>
  );
}

Score.propTypes = {
  current: PropTypes.number.isRequired,
  high: PropTypes.number.isRequired
}

export default Score;