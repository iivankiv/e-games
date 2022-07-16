import { HomeGameCard } from '../../components';

const games = [
  { path: 'game1', title: 'Game 1' },
  { path: 'game1', title: 'Game 2' },
  { path: 'game1', title: 'Game 3' },
  { path: 'crawler', title: 'Crawler' },
];

const GameList = () => {
  return (
    <div className="flex flex-col justify-center">
      <img src="images/forest-game.jpg" className="h-96 object-cover w-full mx-auto" alt="logo" />

      <div className="grid gap-4 grid-cols-4 p-4">
        {games.map(({ path, title }) => <HomeGameCard path={path} title={title} />)}
      </div>
    </div>
  );
};

export default GameList;
