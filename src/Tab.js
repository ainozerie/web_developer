import React from 'react'

export default function Tab(props) {
  return (
    <button name={props.name} className={'tab '+ props.class} onClick={props.click}>
        {props.name}
    </button>
  )
}
