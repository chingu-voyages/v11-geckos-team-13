import React, { Component } from 'react';
import '../card.css';
import PropTypes from 'prop-types';

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
    const { API_KEY } = this.props;
    const link = `https://free.currconv.com/api/v7/currencies?apiKey=${API_KEY}`;
    fetch(link)
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        this.setState({ allCurrencies: myJson.results });
      });
  }

  handleClick = () => {
    const { API_KEY } = this.props;
    const { one, two, amount } = this.state;
    const format = one + "_" + two
    const link = `https://free.currconv.com/api/v7/convert?q=${  one }_${  two  },${  two  }_${  one }&compact=ultra&apiKey=${ API_KEY}`;
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        return myJson[format];
      })
      .then(price=>{
        price *= amount;

        this.setState({
          result: amount + ' ' + one + ' = ' + price + ' ' + two
        });
      });
  };

  updateFirst = (event) =>{
    this.setState({ one: event.target.value });
  };

  updateSecond = event => {
    this.setState({ two: event.target.value });
  };

  updateAmount = event => {
    this.setState({ amount: event.target.value });
 };


 handleSwap = () =>{
   const {API_KEY} = this.props;
   const {one,two,amount,swap} = this.state;
   this.setState({swap: !swap});
   if(swap === false){
     this.handleClick();
   }else{
     var format = two + "_" +one
     var link = "https://free.currconv.com/api/v7/convert?q=" + two +"_" + one + "," + one + "_" + two+ "&compact=ultra&apiKey=" +API_KEY;
     fetch(link)
       .then(response=>{
         return response.json();
       })
       .then(myJson=>{
         return myJson[format];
       })
       .then(price=>{
         price*=amount;


         this.setState({ result: amount + " " + two + " = " + price + " " + one })

       });
   }


 }



 render() {

   const {allCurrencies,result} = this.state;
   return(
     <div className = "card container">
       <h2>Currency Converter</h2>
       <select className="list" onChange={this.updateFirst}>
         {
           Object.keys(allCurrencies).map(function(i) {
               return(

                 <option key = {allCurrencies[i].id} value={allCurrencies[i].id}>{allCurrencies[i].id}</option>

             );
           })


         }
       </select>
       <select className="list" onChange={this.updateSecond}>
         {
           Object.keys(allCurrencies).map(function(i) {
               return(

                 <option className="single" key = {allCurrencies[i].id} value={allCurrencies[i].id}>{allCurrencies[i].id}</option>

             );
           })


         }
       </select>
       <input placeholder = "Enter amount" type="text" id="amount" onChange={this.updateAmount}/ >

       <button className="button" type="button" onClick={this.handleClick}>Get Value</button>
       <button className="button" type="button" onClick={this.handleSwap}>Swap</button>

       <h4>{result}</h4>


     </div>
   );
 }
}


Currency.propTypes = {
   API_KEY: PropTypes.string.isRequired
}


export default Currency;
