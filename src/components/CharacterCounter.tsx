import React from 'react';
import {
    useRecoilValue,
    useRecoilState
} from 'recoil';
import countAtom, { withChar } from 'recoil/text';

function CharacterCounter() {
    return (
      <div>
        <TextInput />
        <CharacterCount />
      </div>
    );
}

export default CharacterCounter;

function CharacterCount() {
    const count = useRecoilValue(withChar);
  
    return <>Character Count: {count}</>;
}

  
function TextInput() {
    const [text, setText] = useRecoilState(countAtom);

    const onChange = (event: any) => {
        setText(event.target.value);
    };

    return (
        <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
            Echo: {text}
        </div>
    );
}