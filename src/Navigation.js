import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Tab from './Tab'
import getOne from './messagesStore'

export default function Navigation() {

  const location = useSelector(state => state.location);
  const dispatch = useDispatch();
  const messages = useSelector(state => state.messages);
  const [message, setMessage] = useState({});

  useEffect(()=> {
    
  })

  const classLocation = (place) => {
    return (location === place) ? 'picked' : 'not';
  }
  
  function clickhandler(event) {
    console.log(messages)
    dispatch({
        type: 'MESSAGE',
        payload: getOne(event.target.name)
    })
    dispatch({
        type: 'CHANGE_TAB',
        payload: event.target.name
    })
  }
  return (
    <div className='navigation'>
        <Tab class={classLocation('home')} name='home' click={clickhandler} />
        <Tab class={classLocation('projects')} name='projects' click={clickhandler} />
        <Tab class={classLocation('skills')} name='skills' click={clickhandler} />
        <Tab class={classLocation('about me')} name='about me' click={clickhandler} />
    </div>
  )
}
