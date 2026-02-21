// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed !== 200) {
      this.setState(prevState => ({
        speed: prevState.speed + 10,
      }))
    }
  }

  onbreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({
        speed: prevState.speed - 10,
      }))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg">
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h2>
          Speed is <span>{speed}mph</span>
        </h2>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="btn-1" type="button" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="btn-2" type="button" onClick={this.onbreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
