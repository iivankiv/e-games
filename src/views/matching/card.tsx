export type TCard = { value: string; index: number };

type Props = {
  matched: boolean;
  visible: boolean;
  card: TCard;
  onSelect(card: TCard): void;
};

function Card({ matched, visible, card, onSelect }: Props) {
  const bg = visible ? 'bg-blue-500' : matched ? 'bg-blue-300' : 'bg-blue-900';

  return (
    <div
      onClick={() => onSelect(card)}
      className={`${
        matched ? 'pointer-events-none' : ''
      } flex items-center justify-center h-48 max-w-sm ${bg} rounded-lg hover:bg-blue-700 cursor-pointer border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700`}
    >
      <span className="text-white text-3xl">{card.value}</span>
    </div>
  );
}

export default Card;
