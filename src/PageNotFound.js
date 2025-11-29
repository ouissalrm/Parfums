import React from 'react'
import Not from './404.png'
import './Page.scss'
export default function PageNotFound() {
  return (
    <div className='all'>
     <div className='image'>
        <img src={Not} alt='imagenotfounf' />

     </div>
     <div className='message'>
        <h1>Oops !</h1>
        <p>the page you are looking for might have been removed had its name changed or is temporarity unavailable .</p>
        <input type='submit' value="GO TO HOMEPAGE" />
     </div>
    </div>
  )
}
