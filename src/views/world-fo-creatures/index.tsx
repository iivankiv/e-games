import React, { useEffect, useState } from 'react';

import { plan, legend } from './utils/world.constant';
import { World } from './models/world.model';
import { WorldLifeLike } from './models/world-life-like.model';

export default function WorldOfCreatures() {
  const [worldMap, setWorldMap] = useState<string[]>([]);

  useEffect(() => {
    handleWorldTurn();
    console.log('WorldOfElements');
  }, []);

  const handleWorldTurn = () => {
    const world = new WorldLifeLike(plan, legend);

    for (let i = 0; i < 5; i++) {
      world.turn();
      setWorldMap((maps) => [...maps, world.toString()]);
      // console.log(world.toString());
    }
  };

  return (
    <div className="flex flex-row mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      {worldMap.map((map, i) => (
        <pre key={i} className="m-4">
          {map}
        </pre>
      ))}
    </div>
  );
}
