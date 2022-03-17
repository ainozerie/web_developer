import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {CSSTransition} from 'react-transition-group'; // ES6
import getOne from './messagesStore'


export default function Home() {
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setDisplay(true);
  })

  const clickhandler = (event) => {
    // console.log(event.target.attributes.name.value)
    dispatch({
        type: 'MESSAGE',
        payload: getOne(event.target.attributes.name.value)
    })
}

  return (
    <CSSTransition in={display} timeout={2000} classNames="my-node">
    <div className='screen'>
        <h1>CURRENT SKILLS 🤾🏻‍♂️</h1>
        <div className='skills'>
            <h3 name='html' onClick={clickhandler}>HTML</h3>
            <h3 name='css' onClick={clickhandler}>CSS</h3>
            <h3 name='js' onClick={clickhandler}>Javascirpt</h3>
            <h3 name='ts' onClick={clickhandler}>Typescript</h3>
            <h3 name='react' onClick={clickhandler}>React</h3>
            <h3 name='redux' onClick={clickhandler}>Redux</h3>
            <h3 name='node' onClick={clickhandler}>Node</h3>
            <h3 name='express' onClick={clickhandler}>Express</h3>
            <h3 name='sql' onClick={clickhandler}>MySQL</h3>
            <h3 name='git' onClick={clickhandler}>Git</h3>
            <h3 name='socketio' onClick={clickhandler}>SocketIO</h3>
            <h3 name='jest' onClick={clickhandler}>Jest</h3>
        </div>
    </div>
    </CSSTransition>
  )
}