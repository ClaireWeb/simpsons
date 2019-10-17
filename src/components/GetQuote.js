import React from 'react'
import './GetQuote.css'

class GetQuote extends React.Component {
  state = {
    characters: [],
    starChar: {}
  }
  getQuote = () => {
    fetch("https://melroune.github.io/starwars-api/api/all.json")
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
    return this.setState({ starChar: item })
  }

  render() {
    return (
      <div>
        <button onClick={this.btnQuote}>Someone's lost in Springfield! Click here to discover it's homeworld ! </button>      
        <p className="quote">{this.state.starChar.homeworld}</p>
        <img className="character-img" src={this.state.starChar.image} alt={this.state.starChar.name}/>
        <p key={this.state.starChar.id}>{this.state.starChar.name}</p>
      </div>
    )
  }
}

export default GetQuote