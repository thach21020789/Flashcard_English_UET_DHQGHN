import React, { useEffect, useState } from 'react'
import keyboard from "./keyboard.json";
import axios from 'axios';
import Key from './Key';

function Keyboard({usedKeys}) {

  return (
    <div className='keyboard'>
      {keyboard && keyboard.map((l) => {
        const color = usedKeys[l.key];
        return (
          <div key={l.key} className={color}>{l.key}</div>
        )
      })}
    </div>
  )

}

export default Keyboard