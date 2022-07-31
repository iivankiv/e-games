export type TCard = { value: string; index: number };

type Props = {
  matched: boolean;
  animated: boolean;
  visible: boolean;
  card: TCard;
  finished: boolean;
  onSelect(card: TCard): void;
};

function Card({ matched, animated, visible, card, finished, onSelect }: Props) {
  const bg = visible ? 'bg-blue-500' : matched ? 'bg-blue-300' : 'bg-blue-900';
  const textColor = 'text-white';

  return (
    <div
      onClick={() => onSelect(card)}
      className={`${matched && !finished ? 'invisible' : ''} ${
        animated ? 'animate-ping' : ''
      } flex items-center justify-center h-32 max-w-sm ${bg} rounded-lg hover:bg-blue-700 cursor-pointer border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700`}
    >
      <span className={`${textColor} text-3xl`}>{matched || visible ? card.value : ''}</span>
    </div>
  );
}

export default Card;
