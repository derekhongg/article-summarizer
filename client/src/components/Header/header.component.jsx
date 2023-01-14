import React from 'react'
import './header.styles.scss';

const Header = () => {
  return (
    <div className='header'>
      <div>
        <h2 className='title'>Summarize with AI ...</h2>
        <h3 className='span'>Mem is the world's first AI-powered workspace that's personalized to you. Amplify your creativity, automate the mundane, and stay organized automatically.</h3>
        <button className='button'>
            Join for Free
        </button>
      </div>
    </div>
  )
}

export default Header
