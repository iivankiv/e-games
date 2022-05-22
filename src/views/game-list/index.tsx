import React from 'react';

import './game-list.css';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

const games = [
  { path: 'game1', title: 'Game 1' },
  { path: 'game1', title: 'Game 2' },
  { path: 'game1', title: 'Game 3' },
];

const GameList = () => {
  return (
    <div className="flex flex-col justify-center">
      <img src={logo} className="Main-logo w-64 my-4 mx-auto" alt="logo" />

      <div className="grid gap-4 grid-cols-3 p-4">
        {games.map((game) => (
          <Link className="p-4 bg-slate-200 text-center" to={game.path}>
            {game.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GameList;
