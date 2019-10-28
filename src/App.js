import React, { Component } from 'react';

import GetQuote from './components/GetQuote';
import Navbar from './components/Navbar';
import QuoteForm from './components/QuoteForm'
import QuoteList from './components/QuoteList';

import './App.css';

class App extends Component {
  state = {
    working: true
  }
  handleClick = () => {
    this.setState({ working: !this.state.working });
  }
  render() {
    const willWork = this.state.working ? 'stop' : 'works';
    return (
      <div className="App">
        <Navbar />
        <GetQuote />
        <div className="App-rolling">
          <button 
            className={willWork}
            onClick={this.handleClick}
          > 
            {this.state.working ? 'CLICK ME' : 'STOOOP !'}
          </button>
          <div>
            <img
              className={willWork}
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Simpsons_Donut.svg/1024px-Simpsons_Donut.svg.png'
              alt='giant donut'
            />
          </div>
        </div>
        <QuoteForm />
        <QuoteList />
      </div>
    )
  }
}

export default App;
