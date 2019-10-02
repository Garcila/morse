import React from 'react';
import morseCode from '../code';

export default function MorseCode() {
  const items = [];
  let regex = /d|l/g;
  const replacements = {d: '.', l: '_'};
  for (let item in morseCode) {
    items.push(
      `${morseCode[item]} ${item.replace(regex, char => replacements[char])}`
    );
  }
  return (
    <ul className='morseCodeList'>
      {items.map(i => (
        <li className='morseCodeListItem' key={i}>
          {i}
        </li>
      ))}
    </ul>
  );
}
