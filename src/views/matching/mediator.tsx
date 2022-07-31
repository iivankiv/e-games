import { useMemo, useReducer } from 'react';
import { Button } from '../../components';
import Card, { TCard } from './card';

function getItems(level: number) {
  const left = Array.from({ length: level * 2 }, (_, index) => index);

  return [...left, ...left];
}

type Action = {
  type: 'init' | 'select' | 'hide';
  data?: {
    card: TCard;
  };
};

type State = {
  matched: Set<string>;
  visible: TCard[];
};

const initialState = { visible: [], matched: new Set<string>() };

function reducer(state: State, { type, data }: Action) {
  const { visible, matched } = state;

  switch (type) {
    case 'select':
      return {
        ...state,
        visible: data?.card ? [...visible, data?.card] : visible,
        matched: visible[0]?.value === data?.card?.value ? matched.add(data.card?.value) : matched,
      };
    case 'hide':
      return { ...state, visible: [] };
    case 'init':
      return {...initialState, matched: new Set<string>()};
    default:
      throw new Error();
  }
}

type Props = {
  level?: number;
};

function Mediator({ level = 4 }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const items: TCard[] = useMemo(
    () =>
      getItems(level)
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }, index) => ({ value: `${value}`, index })),
    [level],
  );

  const handleSelect = (card: TCard) => {
    if (state.visible.length) {
      setTimeout(() => {
        dispatch({ type: 'hide' });
      }, 1000);
    }

    dispatch({ type: 'select', data: { card } });
  };

  const handleReset = () => {
    dispatch({ type: 'init' });
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button title="Reset" onClick={handleReset} />
      </div>
      <div className={`grid grid-cols-${level} gap-4 bg-blue-100 p-4 rounded-xl`}>
        {items.map((item) => (
          <Card
            matched={state.matched.has(item.value)}
            visible={state.visible.some((v) => v.value === item.value && v.index === item.index)}
            card={item}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default Mediator;
