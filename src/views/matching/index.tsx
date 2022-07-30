import React from 'react';
import { WelcomeCard } from '../../components';
import Mediator from './mediator';
import ThemeContext from './themeContext';

const Matching = () => {
  return (
    <div className="max-w-5xl w-full m-auto mb-4">
      <ThemeContext.Provider value="blue">
        <WelcomeCard text="A simple memory game" title="Matching" />
        <Mediator />
      </ThemeContext.Provider>
    </div>
  );
};

export default Matching;
