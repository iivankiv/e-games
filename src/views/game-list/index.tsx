import React from 'react';

import { RoutesEnum } from '../../enums/routes.enum';
import { HomeGameCard } from '../../components';
import { GameCard } from '../../components/HomeGameCard';

const games: GameCard[] = [
  { path: RoutesEnum.WORLD_OF_CREATURES, title: 'World of Creatures' },
  { path: RoutesEnum.CRAWLER, title: 'Crawler' },
  { path: RoutesEnum.Matching, title: 'Matching Game', description: 'A simple memory game' },
];

export default function GameList() {
  return (
    <div className="flex flex-col justify-center">
      <img src="images/forest-game.jpg" className="h-96 object-cover w-full mx-auto" alt="logo" />

      <div className="grid gap-4 grid-cols-4 p-4">
        {games.map(({ path, title, description }) => (
          <HomeGameCard key={title} path={path} title={title} description={description} />
        ))}
      </div>
    </div>
  );
}
