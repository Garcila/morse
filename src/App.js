import React, {useState} from 'react';
import Switch from 'react-switch';

import './App.css';

import code from './code';
import engToMorseCode from './engToMorseCode';
import Header from './components/Header';
import Select from './components/Select';
import MorseToEnglish from './components/MorseToEnglish';
import EnglishToMorse from './components/EnglishToMorse';

function App() {
  const [messageArr, setMessageArr] = useState([]);
  const [messageString, setMessageString] = useState('');
  const [decoded, setDecoded] = useState('');

  const [checked, setChecked] = useState(false);
  const allowedCharacters = ['b', 'l', ' ', 'd'];
  const allowedEnglish = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
  ];

  const typeCode = e => {
    let signal;
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

  const encodeEnglish = messageArr => {
    setDecoded('');
    messageArr.map((i, ind) => {
      i = engToMorseCode[i[ind]] || '🚑';
      setDecoded(decoded => `${decoded}${i}  |  `);
    });
  };

  const decode = messageArr => {
    setDecoded('');
    let sentence = messageArr.join('').split(' ');
    sentence.map(i => {
      i = code[i] || '👻';
      setDecoded(decoded => decoded + i);
    });
    setMessageArr([]);
  };

  const clearQuery = () => {
    setMessageArr([]);
    setDecoded('');
    setMessageString('');
  };

  return (
    <div className='App'>
      <Header id='h' title='Morse Decoder Encoder' />
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
