import { selector } from 'recoil';
import textAtom from './atom';

const textWithCount = selector({
    key: 'textWithCount', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(textAtom);
      return text.length;
    },
});

export default textWithCount;