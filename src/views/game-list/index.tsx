import React from 'react';

import './game-list.css';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import { RoutesEnum } from '../../enums/routes.enum';

const games = [
  { path: RoutesEnum.WORLD_OF_CREATURES, title: 'Game 1' },
  { path: '/world-of-creatures', title: 'Game 2' },
  { path: '/world-of-creatures', title: 'Game 3' },
];

export default function GameList() {
  return (
    <div className="flex flex-col justify-center">
      <img src={logo} className="Main-logo w-64 my-4 mx-auto" alt="logo" />

      <div className="grid gap-4 grid-cols-3 p-4">
        {games.map((game) => (
          <Link key={game.title} className="p-4 bg-slate-200 text-center" to={game.path}>
            {game.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
