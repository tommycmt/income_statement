import React, { Component } from 'react';
import { computeMonthDays, pad } from './Helper.js'

class IncomeTableHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  createHeader() {
    var row = [];
    row.push(<td>{}</td>);
    for (var i = 1; i <= computeMonthDays(this.props.month); i++) {
      row.push(<td>{pad(i, 2)}</td>);
    }
    row.push(<td>{"Type Total"}</td>);
    return <thead><tr>{row}</tr></thead>;
  }
  
  render() {
    return this.createHeader();
  }
}

export default IncomeTableHeader;
