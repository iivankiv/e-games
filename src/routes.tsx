import Matching from './views/matching';
import Crawler from './views/crawler';
import GameList from './views/game-list';
import MainLayout from './layouts/main-layout';
import WorldOfCreatures from './views/world-fo-creatures';
import { RoutesEnum } from './enums/routes.enum';

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <GameList /> },
      { path: RoutesEnum.WORLD_OF_CREATURES, element: <WorldOfCreatures /> },
      { path: RoutesEnum.CRAWLER, element: <Crawler /> },
      { path: RoutesEnum.Matching, element: <Matching /> },
    ],
  },
];
