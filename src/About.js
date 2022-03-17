import React, { useEffect, useState } from 'react'
import {CSSTransition} from 'react-transition-group'; // ES6

export default function Home() {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(true);
  })
  return (
    <CSSTransition in={display} timeout={2000} classNames="my-node">
    <div className='about'>
        <h1>ABOUT ME</h1>
        <p>
          An interest for programming grew up from an internal inner question: how things work 💡.
          That is why several years ago I have started to learn HTML, CSS and Javascript in my spare time 🐣.
          After a while, I have decided that  to dedicate yourself to this field 🐝 .
        </p>
        <p>
          Currently, I am a student at Business College Helsikni on Web Development program on the final stage of my studies 👨🏼‍💻.
          While studying I have learned new technologies 🔬, how to work in a team and independently.
          And I am excited to apply my knowlege to real world projects 🌍.
        </p>
        <p>
          I belive that can-do attitude, ability to get along with people and always impoving yourself
          are key points to succeed in any field 🏓.
        </p>

        
    </div>
    </CSSTransition>
  )
}
