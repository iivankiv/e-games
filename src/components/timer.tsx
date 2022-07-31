import { useEffect, useState } from "react";

type Props = {
  start: boolean;
  initSeconds: number;
  pause: boolean;
  onFinish(): void;
};

const Timer = ({ start, pause, initSeconds, onFinish }: Props) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [timer, setTimer] = useState<any>(null);

  useEffect(() => {
    setSeconds(initSeconds);
  }, [initSeconds]);

  useEffect(() => {
    if (seconds < 1) {
      onFinish();
    }
  }, [seconds, onFinish]);

  useEffect(() => {
    if (timer && pause) {
      clearInterval(timer);
      setTimer(null);
    }
  }, [pause, timer]);

  useEffect(() => {
    if (start && !timer) {
      setTimer(setInterval(() => {
        setSeconds(val => val - 1);
      }, 1000));
    }

    if (timer && !start) {
      clearInterval(timer);
      setTimer(null);
      setSeconds(initSeconds);
    }
    
  }, [start, timer, initSeconds]);

  const buildMinutes = (sec: number) => {
    return `0${Math.floor(sec / 60)}`;
  };

  const buildSeconds = (sec: number) => {
    const value = sec % 60;

    return value > 9 ? value : `0${value}`;
  };

  return (
    <div className="font-medium text-2xl flex items-center">
      <span>{buildMinutes(seconds)}</span>:<span>{buildSeconds(seconds)}</span>
    </div>
  );
};

export default Timer;
