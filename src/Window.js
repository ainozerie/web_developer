import React from 'react'
import Console from './Console'
import Screen from './Screen'

export default function () {
  return (
    <div className='window'>
            <Screen /> //left part
            <Console /> //right part
            

    </div>
  )
}
