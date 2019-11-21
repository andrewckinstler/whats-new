import React from 'react';
import './Menu.css'

const Menu = ({ changeCategory, local, entertainment, health, science, technology }) => {
  return (
    <nav>
      <button onClick={() => changeCategory(local)}>Local News</button>
      <button onClick={() => changeCategory(entertainment)}>Entertainment</button>
      <button onClick={() => changeCategory(health)}>Health</button>
      <button onClick={() => changeCategory(science)}>Science</button>
      <button onClick={() => changeCategory(technology)}>Technology</button>
    </nav>
  )
}

export default Menu;