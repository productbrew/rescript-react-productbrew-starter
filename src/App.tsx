import React from 'react';
import { make as Test } from './components/Test.bs';

const App: React.FC = function () {
  return (
    <div className="h-screen flex flex-col justify-center align-middle text-center">
      <header>
        <Test />
      </header>
    </div>
  );
};

export default App;
