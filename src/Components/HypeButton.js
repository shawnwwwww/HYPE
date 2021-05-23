import React from 'react'
import './HypeButton.css'

// Need to pass in user's "hypedUp" boolean to tell if we need to 
// add or subtract to the total

class HypeButton extends React.Component {
  constructor(props) {
    super(props);
  
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
   
  }

  render() {
    return (
      <div className='hypeButton' onClick={this.handleClick}>
        <p className='buttonText'>HYPE</p>
        <p className='buttonText'>3.1K</p>
      </div>
    )
  }
}

export default HypeButton
