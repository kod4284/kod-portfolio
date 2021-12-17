import React from 'react';
import {
  RecoilRoot
} from 'recoil';

import logo from './logo.svg';
import './App.css';
import CharacterCounter from './components/CharacterCounter';

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
