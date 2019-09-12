

import React, { Component } from 'react';
import './card.css'



class Currency extends Component {


  constructor() {
    super();
    this.state = {
      one : '',
      two : '',
      amount: '',
      result: '',
      allCurrencies: {},
      swap: false
    }

  }

  componentDidMount() {
    var link = "https://free.currconv.com/api/v7/currencies?apiKey=" + this.props.API_KEY;
    fetch(link)
    .then(function(response){
      return response.json();
    })
    .then(myJson=>{
      this.setState({ allCurrencies: myJson.results })
    });

}

  handleClick = () =>{
    var format = this.state.one + "_" + this.state.two
    var link = "https://free.currconv.com/api/v7/convert?q=" + this.state.one +"_" + this.state.two + "," + this.state.two + "_" + this.state.one+ "&compact=ultra&apiKey=" +this.props.API_KEY;
    fetch(link)
      .then(response=>{
        return response.json();
      })
      .then(myJson=>{
        return myJson[format];
      })
      .then(price=>{
        price*=this.state.amount;


        this.setState({ result: this.state.amount + " " + this.state.one + " = " + price + " " + this.state.two })

      });

  }

  updateFirst = (event) =>{

   this.setState({ one: event.target.value })

 };

 updateSecond = (event) =>{

   this.setState({ two: event.target.value })

 }

 updateAmount = (event) =>{

   this.setState({ amount: event.target.value })

 }


 handleSwap = () =>{
   this.state.swap = !this.state.swap;
   if(this.state.swap === false){
     this.handleClick();
   }else{
     var format = this.state.two + "_" + this.state.one
     var link = "https://free.currconv.com/api/v7/convert?q=" + this.state.two +"_" + this.state.one + "," + this.state.one + "_" + this.state.two+ "&compact=ultra&apiKey=" +this.props.API_KEY;
     fetch(link)
       .then(response=>{
         return response.json();
       })
       .then(myJson=>{
         return myJson[format];
       })
       .then(price=>{
         price*=this.state.amount;


         this.setState({ result: this.state.amount + " " + this.state.two + " = " + price + " " + this.state.one })

       });
   }


 }



  render() {

    const {allCurrencies} = this.state;
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

        <h4>{this.state.result}</h4>


      </div>
    );
  }
}

export default Currency;
