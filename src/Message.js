import React from 'react'

export default function Message(props) {
  console.log(props.github)
  return (
    <div className='message'>
        {(props.sender == 'system') &&  <p className='system'>{props.message}</p>}
        {(props.sender == 'personal') && <p className={props.sender}><span className='nickname'>system:&nbsp;</span>{props.message}</p>}
        {(props.github) && <p className={props.sender}>the code and working project are here: <a href={props.github} className='github' target='_blank'>GitHub</a> & <a className='explore' href={props.explore} target='_blank'>Explore</a>
        </p>}
    </div>
  )
}


