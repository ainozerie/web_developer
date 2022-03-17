import React, { useEffect, useState } from 'react'
import {CSSTransition} from 'react-transition-group'; // ES6


export default function Home(props) {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(true);
  })

  return (
    <CSSTransition in={display} timeout={2000} classNames="my-node">
    <div className='screen'>
        <h1>WELCOME TO PORTFOLIO WEBSITE!</h1>
        <p>Here you can get familiar with what the kind of person I am, what interests I have and goals I am aimed 🚀.</p>
        <p>Thank you for your time!☺️</p>
    </div>
    </CSSTransition>
  )
}
