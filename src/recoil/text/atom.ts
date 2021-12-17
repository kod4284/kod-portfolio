import { atom } from 'recoil';

const textAtom = atom({
    key: 'textAtom', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

export default textAtom;