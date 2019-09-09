

import React, { Component } from 'react';



class Currency extends Component {


  constructor() {
    super();
    this.state = {
      one : '',
      two : '',
      amount: '',
      result: '',
      allCurrencies: {}
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





  render() {

    const {allCurrencies} = this.state;
    return(
      <div>
        <select onChange={this.updateFirst}>
          {
            Object.keys(allCurrencies).map(function(i) {
                return(

                  <option key = {allCurrencies[i].id} value={allCurrencies[i].id}>{allCurrencies[i].id}</option>

              );
            })


          }
        </select>
        <select onChange={this.updateSecond}>
          {
            Object.keys(allCurrencies).map(function(i) {
                return(

                  <option key = {allCurrencies[i].id} value={allCurrencies[i].id}>{allCurrencies[i].id}</option>

              );
            })


          }
        </select>
        <input placeholder = "Enter amount" type="text" id="amount" onChange={this.updateAmount}/>

        <button type="button" onClick={this.handleClick}>Get Value</button>

        <h1>{this.state.result}</h1>


      </div>
    );
  }
}

export default Currency;
