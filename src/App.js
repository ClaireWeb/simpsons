import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteCard 
        img = 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939'
        fullname = 'Homer Simpson'
        quote = 'I believe the children are the future... Unless we stop them now!'
      />
      <QuoteCard 
        img = 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523'
        fullname = 'Ralph Wiggum'
        quote = "Me fail English? That's unpossible"
      />
      <QuoteCard 
        img = 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185'
        fullname = 'Nelson Muntz'
        quote = "Shoplifting is a victimless crime, like punching someone in the dark."
      />
      <QuoteCard 
        img = 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMoeSzyslak.png?1497567512411'
        fullname = 'Moe Szyslak'
        quote = "Well, I'm better than dirt. Well, most kinds of dirt. I mean not that fancy store bought dirt. That stuffs loaded with nutrients. I.. I can't compete with that stuff."
      />
      <QuoteCard 
        img = 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083'
        fullname = 'Lisa Simpson'
        quote = "Shut up, brain. I got friends now. I don't need you anymore."
      />
      <QuoteCard 
        quote =	"My eyes! The goggles do nothing!"
        fullname = "Rainier Wolfcastle"
        img =	"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRainierWolfcastle.png?1497567511035"
      />
      <QuoteCard 
        quote = "You're turning me into a criminal when all I want to be is a petty thug."
        fullname = "Bart Simpson"
        img =	"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"
      />
    </div>
  );
}

export default App;
