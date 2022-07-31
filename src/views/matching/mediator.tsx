import { Button, ResetIcon, StartIcon, Timer } from '../../components';
import Card from './card';
import { GAME_SECONDS } from './config';
import useGameData from './useGameData';

type Props = {
  level?: number;
};

function Mediator({ level = 4 }: Props) {
  const { items, state, handleReset, handleStart, handleSelect, handleFinish } = useGameData();

  return (
    <div>
      <div className="flex justify-end mb-4 gap-4">
        <Timer start={state.started} initSeconds={GAME_SECONDS} pause={state.finished} onFinish={handleFinish} />
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
