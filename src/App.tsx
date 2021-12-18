import React, { useState } from 'react';
import {
  RecoilRoot
} from 'recoil';

import logo from 'logo.svg';
import 'App.css';
import CharacterCounter from 'components/CharacterCounter';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

function App() {
  const { t } = useTranslation('common');
  const [langState, setLangState] = useState<string>(toggleLang(i18n.language));

  const changeLang = () => {
    setLangState(i18n.language);
    i18n.changeLanguage(toggleLang(i18n.language));
  };

  return (
    <RecoilRoot>
      {<h3>{t('main')}</h3>}
      <button onClick={changeLang}>{langState}</button>
      <CharacterCounter />
    </RecoilRoot>
  );
}

const toggleLang = (lang: string) => lang === 'ko' ? 'en-US' : 'ko';

export default App;
