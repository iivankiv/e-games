import MainLayout from './layouts/main-layout';
import WorldOfCreatures from './views/world-fo-creatures';
import GameList from './views/game-list';
import { RoutesEnum } from './enums/routes.enum';

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <GameList /> },
      { path: RoutesEnum.WORLD_OF_CREATURES, element: <WorldOfCreatures /> },
    ],
  },
];
