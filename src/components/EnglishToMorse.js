import React from 'react';

export default function MorseToEnglish(props) {
  const {
    messageArr,
    clearQuery,
    decode,
    decoded,
    typeEnglish,
    encodeEnglish,
  } = props;
  return (
    <div>
      <input type='text' id='englishInput' onChange={typeEnglish} />
      <span>
        <button id='decode' onClick={() => encodeEnglish(messageArr)}>
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
