import React from 'react'
import Not from './404.png'
export default function PageNotFound() {
  return (
    <div>
     <div className='image'>
        <img src={Not} alt='imagenotfounf' />

     </div>
     <div className='message'>
        <h1>Oops</h1>
        <p>the page you are looking for might have been removed had its name changed or is temporarity unavailable .</p>
        <input type='submit' value="GO TO HOMEPAGE" />
     </div>
    </div>
  )
}
