import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health'
import science from '../../data/science'
import technology from '../../data/technology'
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: local
    }
  }

  changeCategory = (category) => {
    this.setState({news: category})
  }

  render () {
    return (
      <div className="app">
        <Menu 
        changeCategory={this.changeCategory}
        local={local}
        entertainment={entertainment}
        health={health}
        science={science}
        />
        <NewsContainer articles={this.state.news}/>
      </div>
    );
  }
}

export default App;
