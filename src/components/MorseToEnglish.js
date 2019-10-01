import React from 'react';

export default function MorseToEnglish(props) {
  const {
    typeCode,
    messageArr,
    messageString,
    clearQuery,
    decode,
    decoded,
  } = props;
  return (
    <div>
      <div id='morse' tabIndex='1' onKeyPress={typeCode}>
        {messageString}
      </div>
      <span>
        <button id='decode' onClick={() => decode(messageArr)}>
          decode
        </button>
        <button id='clearQuery' onClick={clearQuery}>
          Clear
        </button>
      </span>
      <div id='roman'>{decoded}</div>
    </div>
  );
}
