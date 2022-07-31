import { useEffect, useMemo, useReducer } from "react";

import { TCard } from "./card";
import { DELAY_OPENED, GAME_LEVEL } from "./config";

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

function useGameData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const items: TCard[] = useMemo(
    () =>
      getItems(GAME_LEVEL)
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }, index) => ({ value: `${value}`, index })),
    [],
  );

  useEffect(() => {
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

  const handleFinish = () => {
    dispatch({ type: 'finished' });
  };

  return {
    items,
    state,
    handleSelect,
    handleReset,
    handleStart,
    handleFinish
  };
}

export default useGameData;
