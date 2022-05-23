import React, { useEffect, useState } from 'react';

import { plan, legend } from './utils/world.constant';
import { World } from './models/world.model';
import { WorldLifeLike } from './models/world-life-like.model';

const WorldOfElements = () => {
  const [worldMap, setWorldMap] = useState('');

  useEffect(() => {
    handleWorldTurn();
  }, []);

  const handleWorldTurn = () => {
    const world = new WorldLifeLike(plan, legend);

    for (let i = 0; i < 50; i++) {
      world.turn();
      console.log(world.toString());
    }
  };

  return <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">My World</div>;
};

export default WorldOfElements;
