import React from 'react'
import axios from 'axios'
import './GetQuote.css'

class GetQuote extends React.Component {
  state = {
    characters: [],
    starChar: {},
    isLoaded: false
  }
  getQuote = () => {
    axios
      .get("https://melroune.github.io/starwars-api/api/all.json")
      .then(res => this.setState({characters: res.data, isLoaded: true}))
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
    const { starChar, isLoaded } = this.state
    return (
      <>
        {!isLoaded ? (
          <div>Loading...</div> 
        ) : (        
          <div>
            <button onClick={this.btnQuote}>Someone's lost in Springfield! Click here to discover it's homeworld ! </button>      
            <p className="quote">{starChar.homeworld}</p>
            <img className="character-img" src={starChar.image} alt={starChar.name}/>
            <p key={starChar.id}>{starChar.name}</p>
          </div>
        )}
      </>
    )
  }
}

export default GetQuote