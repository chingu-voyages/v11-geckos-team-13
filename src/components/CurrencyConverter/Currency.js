/* jshint esversion: 6 */

import React, { Component } from 'react';
import '../card.css';
import Card from '../Card/Card';
import Get from './icons/get.png';
import Swap from './icons/swap.png';

class Currency extends Component {
  constructor() {
    super();
    this.state = {
      one: '',
      two: '',
      amount: '',
      result: '',
      allCurrencies: {},
      swap: true
    };
  }

  componentDidMount() {
    const link = `https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest?base=IDR`;
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({ allCurrencies: myJson.rates });
      });
  }

  handleClick = () => {
    const { one, two, amount } = this.state;
    const link = `https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest?base=${one}`;
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        return myJson.rates[two];
      })
      .then(price => {
        this.setState({
          result: `${amount} ${one} = ${price * amount} ${two}`
        });
      });
  };

  updateFirst = event => {
    this.setState({ one: event.target.value });
  };

  updateSecond = event => {
    this.setState({ two: event.target.value });
  };

  updateAmount = event => {
    this.setState({ amount: event.target.value });
  };

  handleSwap = () => {
    const { one, two, amount, swap } = this.state;
    this.setState({ swap: !swap });
    if (swap === false) {
      this.handleClick();
    } else {
      const link = `https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest?base=${two}`;
      fetch(link)
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          return myJson.rates[one];
        })
        .then(price => {
          this.setState({
            result: `${amount} ${two} = ${price * amount} ${one}`
          });
        });
    }
  };

  render() {
    const { allCurrencies, result } = this.state;
    return (
      <Card>
        <div className="container currency">
          <select className="list" onChange={this.updateFirst}>
            {Object.keys(allCurrencies).map(single => {
              return (
                <option key={single} value={single}>
                  {single}
                </option>
              );
            })}
          </select>
          <select className="list" onChange={this.updateSecond}>
            {Object.keys(allCurrencies).map(single => {
              return (
                <option className="single" key={single} value={single}>
                  {single}
                </option>
              );
            })}
          </select>
          <input
            placeholder="Enter amount"
            type="text"
            id="amount"
            onChange={this.updateAmount}
          />

          <button className="button" type="button" onClick={this.handleClick}>
            <img height="20" width="20" alt="Get value" src={Get} />
          </button>
          <button className="button" type="button" onClick={this.handleSwap}>
            <img height="20" width="20" alt="Swap" src={Swap} />
          </button>

          <h4>{result}</h4>
        </div>
      </Card>
    );
  }
}

export default Currency;
