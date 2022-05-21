import React from 'react';

import logo from '../../logo.svg';
import './game-list.css';
import { Link } from 'react-router-dom';

const games = [
  { path: 'game1', title: 'Game 1' },
  { path: 'game1', title: 'Game 2' },
  { path: 'game1', title: 'Game 3' },
];

const GameList = () => {
  return (
    <div className="Game-list-container">
      <img src={logo} className="Main-logo" alt="logo" />

      <div className="Game-list">
        {games.map((game) => (
          <div className="Game-link">
            <Link to={game.path}>{game.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
