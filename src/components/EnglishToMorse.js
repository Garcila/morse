import React, {useState} from 'react';

export default function MorseToEnglish(props) {
  const [typed, setTyped] = useState('');
  const {clearQuery, decoded, encodeEnglish} = props;

  const handleClicked = () => {
    encodeEnglish([...typed]);
  };
  return (
    <div>
      <input
        type='text'
        id='englishInput'
        value={typed}
        onChange={e => setTyped(e.target.value)}
        onKeyDown={key => {
          if (key.keyCode === 13) {
            handleClicked();
          }
        }}
      />
      <span>
        <button id='decode' onClick={handleClicked}>
          decode
        </button>
        <button id='clearQuery' onClick={() => clearQuery(typed, setTyped)}>
          Clear
        </button>
      </span>
      <div id='roman'>
        <span className='englishToMorseRomanSpan'>{typed}:</span>
        {decoded}
      </div>
    </div>
  );
}
