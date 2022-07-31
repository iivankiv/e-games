import { useEffect, useMemo, useReducer } from 'react';
import { Button, ResetIcon, StartIcon, Timer } from '../../components';
import Card, { TCard } from './card';
import { DELAY_OPENED, GAME_SECONDS } from './config';

function getItems(level: number) {
  const left = Array.from({ length: level * 2 }, (_, index) => index);

  return [...left, ...left];
}

type Action = {
  type: 'init' | 'select' | 'hide' | 'update' | 'start' | 'finished';
  data?: {
    card: TCard;
  };
};

type State = {
  matched: Set<string>;
  visible: TCard[];
  animated: Set<string>;
  steps: number;
  started: boolean;
  finished: boolean;
};

const initialState = {
  visible: [],
  matched: new Set<string>(),
  animated: new Set<string>(),
  steps: 0,
  started: false,
  finished: false,
};

function reducer(state: State, { type, data }: Action) {
  const { visible, matched, animated, steps } = state;

  switch (type) {
    case 'select':
      return {
        ...state,
        visible: data?.card ? [...visible, data?.card] : visible,
        animated: visible[0]?.value === data?.card?.value ? animated.add(data.card?.value) : animated,
      };
    case 'start':
      return { ...initialState, started: true, matched: new Set<string>(), animated: new Set<string>() };
    case 'finished':
      return { ...state, finished: true };
    case 'hide':
      return { ...state, visible: [], steps: steps + 1 };
    case 'update':
      return { ...state, matched: matched.add(data?.card?.value || ''), animated: new Set<string>() };
    case 'init':
      return { ...initialState, matched: new Set<string>(), animated: new Set<string>() };
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

  useEffect(() => {
    console.log(items.length / 2, state.matched.size);
    if (items.length / 2 === state.matched.size) {
      dispatch({ type: 'finished' });
    }
  }, [state.matched.size, items]);

  const handleSelect = (card: TCard) => {
    if (state.visible.length) {
      setTimeout(() => {
        dispatch({ type: 'hide' });

        if (state.visible[0]?.value === card?.value) {
          dispatch({ type: 'update', data: { card } });
        }
      }, DELAY_OPENED);
    }

    dispatch({ type: 'select', data: { card } });
  };

  const handleReset = () => {
    dispatch({ type: 'init' });
  };

  const handleStart = () => {
    dispatch({ type: 'start' });
  };

  return (
    <div>
      <div className="flex justify-end mb-4 gap-4">
        <Timer start={state.started} initSeconds={GAME_SECONDS} pause={state.finished} />
        <span className="flex items-center font-medium text-2xl">{`${state.steps} ходів`}</span>
        <Button title="Обнулити" onClick={handleReset} headIcon={<ResetIcon />} />
        <Button title="Почати" onClick={handleStart} headIcon={<StartIcon />} />
      </div>
      <div
        className={`grid grid-cols-${level} gap-8 bg-blue-100 p-8 rounded-xl ${
          !state.started || state.finished ? 'pointer-events-none opacity-75' : ''
        }`}
      >
        {items.map((item) => (
          <Card
            key={item.index}
            finished={state.finished}
            matched={state.matched.has(item.value)}
            animated={state.animated.has(item.value)}
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
