import React, { useEffect, useState } from 'react';

import { plan, legend } from './utils/world.constant';
import { World } from './models/world.model';

const WorldOfElements = () => {
  const [worldMap, setWorldMap] = useState('');

  useEffect(() => {
    handleWorldTurn();
  }, []);

  const handleWorldTurn = async () => {
    const world = new World(plan, legend);

    for (let i = 0; i < 2; i++) {
      world.turn();
      setWorldMap(world.toString());
    }
  };

  return <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">{worldMap}</div>;
};

export default WorldOfElements;
