import React from 'react'
import Tab from './Tab'
export default function Contacts() {
  return (
    <div className='contacts'>
        <div className='links'>
            <p className='contact'>Contacts:</p>
            <a href='https://t.me/ainozerie' target='_blank'><Tab class='contact' name='telegram'/></a>
            <a href='mailto: ainozerie.prod@gmail.com'><Tab class='contact' name='mail'/></a>
            <a href='https://www.linkedin.com/in/ainozerov-sergei-0790a6228/' target='_blank'><Tab class='contact' name='linkedin'/></a>
            <a href='tel:+3580403656697' target='_blank'><Tab class='contact' name='phone'/></a>
            <a href='https://github.com/ainozerie' target='_blank'><Tab class='contact' name='github'/></a>
        </div>
        <div className='created'>
            <p>Designed and created by Ainozerov Sergei ☘️</p>
        </div>
    </div>
  )
}
