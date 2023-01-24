import React from 'react'
import './header.styles.scss';
import background from '../../images/minimal.png'

const Header = () => {
  return (
    <div className='header'>
      <div>
        <h2 className='title'>Summarize with AI ...</h2>
        <h3 className='span'>Summarize Any Article To Your Specifications With Our Article Summarizer</h3>
        <button className='button'>
            Join for Free
        </button>
      </div>
    </div>
  )
}

export default Header
