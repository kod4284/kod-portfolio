import React from 'react';
import {
  RecoilRoot
} from 'recoil';

import Main from 'components/main';

function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}

export default App;
