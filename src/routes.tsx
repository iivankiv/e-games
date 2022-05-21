import MainLayout from './layouts/main-layout';
import GridExamples from './views/grid-examples';
import GameList from './views/game-list';

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <GameList /> },
      { path: 'game1', element: <GridExamples /> },
    ],
  },
];
