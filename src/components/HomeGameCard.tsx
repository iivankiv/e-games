import { Link } from 'react-router-dom';
export interface GameCard {
  path: string;
  title: string;
  description?: string;
};

type Props = GameCard;

const HomeGameCard = ({
  path,
  title,
  description = 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
}: Props) => {
  return (
    <Link
      className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      to={path}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
    </Link>
  );
};

export default HomeGameCard;
