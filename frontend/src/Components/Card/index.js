import React, { useState } from 'react'
import './style.css'
import { Link, useLocation } from 'react-router-dom';
function Card(props) {
    const { heading, children } = props;
  const location = useLocation();
  return (
      <>
          <div className="main" style={{marginTop:'8rem'}}>
              <div className='card'>
                  <div className='card_head'>
                      <h1>{heading}</h1>
                  </div>
                  <div className='card_body'>
                      {children}
                  </div>
                  <div className='footer'>
                  {
        location.pathname === '/signup' ? (
          <Link className='text-decoration-none text-dark' to='/login'>Login</Link>
        ) : (
          <Link className='text-decoration-none text-dark' to='/signup'>Signup</Link>
        )
      }
                  </div>
              </div>
      </div>
      
      </>
  )
}

export default Card