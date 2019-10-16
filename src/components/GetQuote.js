import React from 'react'
import './GetQuote.css'

class GetQuote extends React.Component {
  state = {
    characters: [],
    aSimpson: {}
  }
  getQuote = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=50")
      .then(res => res.json())
      .then(res => this.setState({characters: res}))
  }
  
  componentDidMount() {
    this.getQuote()
  }

  btnQuote = () => {
    let item = this.state.characters[
      Math.floor(Math.random() * this.state.characters.length)
    ]
    return this.setState({ aSimpson: item })
  }

  render() {
    return (
      <div>
        <button onClick={this.btnQuote}>Get a random character !</button>      
        <p className="quote">{this.state.aSimpson.quote}</p>
        <img className="character-img" src={this.state.aSimpson.image} alt={this.state.aSimpson.character}/>
        <p key={this.state.aSimpson.character}>{this.state.aSimpson.character}</p>
      </div>
    )
  }
}

export default GetQuote