import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './Timer.css';

class Timer extends Component {
  constructor() {
    super();
    this.countdownRef = React.createRef();
    this.state = {
      amount: 0,
      counterStarted: false
    };
  }

  updateAmount = event => {
    this.setState({ counterStarted: false });
    this.setState({ amount: event.target.value * 60 * 1000 });
  };

  startCounter = () => {
    this.setState({ counterStarted: true });
  };

  render() {
    const { amount, counterStarted } = this.state;
    const { className } = this.props;

    return (
      <Card className={className}>
        <div>
          <h2>Countdown</h2>
          <input
            placeholder="Enter time in minutes"
            type="text"
            id="amount"
            onChange={this.updateAmount}
          />
          <button
            className="btn-start-counter"
            type="button"
            onClick={this.startCounter}
          >
            {counterStarted ? 'Reset counter' : 'Start counter'}
          </button>
          {counterStarted && (
            <Countdown ref={this.countdownRef} date={Date.now() + amount} />
          )}
        </div>
      </Card>
    );
  }
}

Timer.propTypes = {
  className: PropTypes.string.isRequired
};

export default Timer;
