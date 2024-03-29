import React from 'react';
import Switch from 'react-switch';

export default function Select(props) {
  const switchChange = () => {
    props.setChecked(!props.checked);
  };
  return (
    <div className='morseToEnglish'>
      <label>
        <span
          style={
            props.checked === false
              ? {background: 'coral', color: 'black'}
              : null
          }
        >
          Morse To English
        </span>
        <Switch
          onChange={switchChange}
          checked={props.checked}
          onColor='#86d3ff'
          offColor='#86d3ff'
          onHandleColor='#2693e6'
          handleDiameter={20}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
          activeBoxShadow='0px 0px 1px 4px rgba(0, 0, 0, 0.2)'
          height={20}
          width={88}
        />
        <span
          style={
            props.checked === true
              ? {background: 'coral', color: 'black'}
              : null
          }
        >
          English To Morse
        </span>
      </label>
    </div>
  );
}
