import React, {useState} from 'react';

import './App.css';

import code from './code';
import engToMorseCode from './engToMorseCode';
import Header from './components/Header';
import Select from './components/Select';
import MorseToEnglish from './components/MorseToEnglish';
import EnglishToMorse from './components/EnglishToMorse';
import MorseCode from './components/MorseCode';

function App() {
  const [messageArr, setMessageArr] = useState([]);
  const [messageString, setMessageString] = useState('');
  const [decoded, setDecoded] = useState('');

  const [checked, setChecked] = useState(false);
  const allowedCharacters = ['b', 'l', ' ', 'd'];

  const typeCode = e => {
    let signal;
    console.log(e.key);
    e.key === 'Enter' && decode(messageArr);
    if (allowedCharacters.includes(e.key)) {
      setMessageArr([...messageArr, e.key]);
      if (e.key === 'd') {
        signal = '.';
      } else if (e.key === 'l') {
        signal = '_';
      } else if (e.key === ' ') {
        signal = '|';
      }
      setMessageString(`${messageString}${signal}`);
      if (e.key === 'b') {
        setMessageArr(messageArr.splice(0, messageArr.length - 1));
        setMessageString(messageString.substring(0, messageString.length - 1));
      }
    }
  };

  const typeEnglish = e => {
    setMessageArr([...messageArr, e.target.value]);
  };

  const encodeEnglish = typed => {
    setDecoded('');
    typed.map(i => {
      i = engToMorseCode[i] || '👻';
      return setDecoded(decoded => `${decoded}${i} | `);
    });
  };

  const decode = messageArr => {
    setDecoded('');
    let sentence = messageArr.join('').split(' ');
    sentence.map(i => {
      i = code[i] || '👻';
      return setDecoded(decoded => decoded + i);
    });
    setMessageArr([]);
  };

  const clearQuery = (typed, setTyped) => {
    setMessageArr([]);
    setDecoded('');
    setMessageString('');
  };

  return (
    <div className='App'>
  
      <Header title='Morser' subtitle='encode and decode morse code' />
      <MorseCode />
      <Select checked={checked} setChecked={setChecked} />
      {!checked ? (
        <MorseToEnglish
          messageArr={messageArr}
          messageString={messageString}
          decoded={decoded}
          typeCode={typeCode}
          clearQuery={clearQuery}
          decode={decode}
        />
      ) : (
        <EnglishToMorse
          messageString={messageString}
          typeEnglish={typeEnglish}
          messageArr={messageArr}
          decoded={decoded}
          typeCode={typeCode}
          clearQuery={clearQuery}
          decode={decode}
          encodeEnglish={encodeEnglish}
        />
      )}
    </div>
  );
}

export default App;
