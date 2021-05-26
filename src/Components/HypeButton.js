import React from 'react'
import './HypeButton.css'

// Need to pass in user's "hypedUp" boolean to tell if we need to 
// add or subtract to the total, and communicate with backend for
// true number of hypes

class HypeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hypes: 1
        }
  
        this.handleClick = this.handleClick.bind(this);
        this.convertHypes = this.convertHypes.bind(this);
    }

    handleClick() {
        this.setState({hypes: this.state.hypes + 1})   
    }

    convertHypes() {
        if (this.state.hypes > 999999) {
            return Math.floor(this.state.hypes / 100000) / 10 + 'm';
        } else if (this.state.hypes > 999) {
            return Math.floor(this.state.hypes / 100) / 10 + 'k';
        } else {
            return this.state.hypes;
        }
    }

    render() {
        return (
            <div className='hypeButton' onClick={this.handleClick}>
                <p className='buttonText'>HYPE</p>
                <p className='buttonText'>{this.convertHypes()}</p>
            </div>
        )
    }
}

export default HypeButton
