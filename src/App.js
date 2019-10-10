import React from 'react';
import Navbar from './components/Navbar';
import QuoteList from './components/QuoteList';
import Lamp from './Lamp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Lamp on />
      <Lamp />
      <QuoteList />
    </div>
  );
}

export default App;
