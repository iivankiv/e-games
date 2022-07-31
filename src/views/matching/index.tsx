import React from 'react';
import { WelcomeCard } from '../../components';
import Mediator from './mediator';
import ThemeContext from './themeContext';

const Matching = () => {
  return (
    <div className="max-w-3xl w-full m-auto mb-4">
      <ThemeContext.Provider value="blue">
        <WelcomeCard text="Проста гра для тренування пам'яті" title="Тренуємо пам'ять" />
        <Mediator />
      </ThemeContext.Provider>
    </div>
  );
};

export default Matching;
