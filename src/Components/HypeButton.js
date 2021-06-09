import React from 'react'
import './HypeButton.css'

class HypeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inFocus: 0,
            hypes: 2999,
            isHyped: false
        }
  
        this.handleClick = this.handleClick.bind(this);
        this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
        this.convertHypes = this.convertHypes.bind(this);
    }

    handleClick() {
        this.setState({
            inFocus: 1,
            hypes: this.state.isHyped ? this.state.hypes - 1 : this.state.hypes + 1,
            isHyped: !this.state.isHyped
        })
    }

    handleAnimationEnd() {
        this.setState({
            inFocus: 0
        })
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
            <div className='hypeButtonContainer'>

                <div className='hypeButton'
                    style={{
                        backgroundColor: this.state.isHyped ?
                            'rgba(222, 91, 255, 0.2)' : 'rgba(222, 91, 255, 0.04)'
                    }}
                    onClick={this.handleClick}
                >

                    <p className='buttonText' infocus='0'>
                        {this.state.isHyped ? 'HYPED' : 'HYPE'}
                    </p>

                    <span infocus={this.state.inFocus}
                        data={this.state.isHyped ? '+1' : '-1'}
                        onAnimationEnd={() => this.handleAnimationEnd()}
                    >

                        <p className='buttonText'> {this.convertHypes()} </p>

                    </span>

                </div>

            </div>

        )
    }
}

export default HypeButton
