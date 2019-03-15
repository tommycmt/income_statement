import React, { Component } from 'react';
import './Income.css';
import IncomeTable from './IncomeTable.js'

class Income extends Component {
  render() {
    return (
      <div className="income">
        <h1>Income Statement</h1>
        <IncomeTable />
      </div>
    );
  }
}

export default Income;
