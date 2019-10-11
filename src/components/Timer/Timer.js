import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import '../Card/Card.css';

class Timer extends Component {
  constructor() {
    super();
    this.countdownRef = React.createRef();
    this.state = {
      amount: 0
    };
  }

  updateAmount = event => {
    this.setState({ amount: event.target.value * 60 * 1000 });
  };

  render() {
    const { amount } = this.state;
    return (
      <div className="Card">
        <h2>Countdown</h2>
        <input
          placeholder="Enter time in minutes"
          type="text"
          id="amount"
          onChange={this.updateAmount}
        />
        <Countdown ref={this.countdownRef} date={Date.now() + amount} />
      </div>
    );
  }
}

export default Timer;
