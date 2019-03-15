import React, { Component } from 'react';
import { computeMonthDays, getSum } from './Helper.js'


class ExpenditureSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  createRows() {
    var rows = [];
    var keys = Object.keys(this.props.expenditureData[this.props.month]);
    for (var index in keys){
      var key = keys[index];
      var row = [];
      row.push(<td>{key}</td>);
      for (var i = 1; i <= computeMonthDays(this.props.month); i++) {
        row.push(<td>${this.props.expenditureData[this.props.month][key][i-1] || 0}</td>);
      }
      row.push(<td>${this.props.expenditureData[this.props.month][key].reduce(getSum) || 0}</td>);
      rows.push(<tr>{row}</tr>);
    };

    return rows;
  }
  
  createSubTotal() {
    var row = [];
    row.push(<td className="section">{"Sub Total"}</td>);
    var allTotal = 0;
    for (var i = 1; i <= computeMonthDays(this.props.month); i++) {
      var total = 0;
      var keys = Object.keys(this.props.expenditureData[this.props.month]);
      for (var index in keys){
        var key = keys[index];
        total += this.props.expenditureData[this.props.month][key][i-1];
      };
      allTotal += total;
      row.push(<td>${total}</td>);
    }
    row.push(<td>${allTotal}</td>);
    return <tr>{row}</tr>;
  }
  
  render() {
    return (
      <tbody>
        <tr>
          <td className="section">Expenditure</td>
          <td colSpan="100%"></td>
        </tr>
        {this.createRows()}
        {this.createSubTotal()}
      </tbody>
    );
  }
}


export default ExpenditureSection;
