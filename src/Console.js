import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Message from './Message'


export default function Console() {
  // const location = useSelector(state => state.location)
  const messages = useSelector(state => state.messages)
  const [count, setCount] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(true);
      console.log(count, 'here')
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  const messagesFilter = messages.filter(item => {
    if (messages.indexOf(item) >= (messages.length - 5)) {
      return item;
    }
  })
  const messagesToDisplay = messagesFilter.map(item => (
    (count && <Message key={item.id} sender={item.sender} message={item.message} github={item.github} explore={item.explore}/>)
  ))

  return (
    <div className='console-container'>
    <div className='console'>
        <div className='bar'><span>Console:&nbsp;</span></div>
        <div className='commandline'>
            {messagesToDisplay}
        </div>
        
    </div>
    </div>
  )
}
