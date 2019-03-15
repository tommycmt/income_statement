import React, { Component } from 'react';
import { computeMonthDays, getSum } from './Helper.js'


class DayTotal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  createTotal() {
    var row = [];
    row.push(<td className="section">{"Day Total"}</td>);
    var allTotal = 0;
    for (var i = 1; i <= computeMonthDays(this.props.month); i++) {
      var incomeTotal = 0;
      var expenditureTotal = 0;
      var keys = Object.keys(this.props.incomeData[this.props.month]);
      for (var index in keys){
        var key = keys[index];
        incomeTotal += this.props.incomeData[this.props.month][key][i-1];
      };
      
      var keys = Object.keys(this.props.expenditureData[this.props.month]);
      for (var index in keys){
        var key = keys[index];
        expenditureTotal += this.props.expenditureData[this.props.month][key][i-1];
      };
      var total = incomeTotal - expenditureTotal;
      allTotal += total;
      row.push(<td>${total}</td>);
    }
    row.push(<td>${allTotal}</td>);
    return <tbody><tr>{row}</tr></tbody>;
  }
  
  render() {
    return this.createTotal();
  }
}

export default DayTotal;
