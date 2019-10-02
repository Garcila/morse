import React, {useRef, useEffect} from 'react';

export default function MorseToEnglish(props) {
  const morseArea = useRef(null);
  const {
    typeCode,
    messageArr,
    messageString,
    clearQuery,
    decode,
    decoded,
  } = props;

  useEffect(() => {
    morseArea.current.focus();
  }, []);
  return (
    <div>
      <div className='instructions'>
        Type <span>d</span> to represent <span>a</span> dot ('.'),
        <span>l</span> to represent a line ('_'), <span>|</span> to start a new
        letter, and <span>b</span> to erase a character
      </div>
      <div id='morse' tabIndex='1' ref={morseArea} onKeyPress={typeCode}>
        {messageString}
      </div>
      <span className='buttons'>
        <button onClick={() => decode(messageArr)}>decode</button>
        <button onClick={clearQuery}>Clear</button>
      </span>
      <div id='roman'>{decoded}</div>
    </div>
  );
}
