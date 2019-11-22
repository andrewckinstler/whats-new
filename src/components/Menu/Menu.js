import React from 'react';
import './Menu.css'

const Menu = ({ changeCategory, local, entertainment, health, science, technology }) => {
  return (
    <nav>
      <h1>What's New</h1>
      <button className='local' onClick={() => changeCategory(local)}>Local News</button>
      <button className='entertainment' onClick={() => changeCategory(entertainment)}>Entertainment</button>
      <button className='health' onClick={() => changeCategory(health)}>Health</button>
      <button className='science' onClick={() => changeCategory(science)}>Science</button>
      <button className='tech' onClick={() => changeCategory(technology)}>Technology</button>
    </nav>
  )
}

export default Menu;