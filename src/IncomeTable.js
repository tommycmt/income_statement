import React, { Component } from 'react';
import './IncomeTable.css';

import IncomeTableHeader from './IncomeTableHeader.js'
import IncomeSection from './IncomeSection.js'
import ExpenditureSection from './ExpenditureSection.js'
import DayTotal from './DayTotal.js'
import { computeMonthDays, pad, getMonthName, decryptToken} from './Helper.js'
import { getIncomeData, getExpenditureData, formmatedData, uploadToDB} from './mLabAPI.js'


class IncomeTable extends Component {
  constructor(props) {
    super(props);
    var today = new Date();
    var month = today.getMonth() + 1;
    var monthDays = computeMonthDays(month);
    var token = "";
    var income = formmatedData({});
    var expenditure = formmatedData({});
    var decoded = decodeURIComponent(document.location.search.substr(1));
    var qs = decoded.split("&");
    for (var index in qs) {
        var params = qs[index].split("=");
        if (params[0] == "passphrase") {
          token = decryptToken(params[1]);
          getIncomeData(token, function(res) {income = res;});
          getExpenditureData(token, function(res) {expenditure = res;}) 
        }
    }
    this.state = { "month": month,
                   "monthDays": monthDays,
                   "apiToken": token,
                   "income": income,
                   "expenditure": expenditure,
    };
  }
  
  changeMonth() {
    var newMonth = prompt("Month (1-12):");
    if (newMonth === null || newMonth === "" || newMonth === undefined) {
      return;
    }
    newMonth = newMonth.trim()
    this.setState({ "month": newMonth},
      function() {this.setState({ monthDays: computeMonthDays(this.state.month)})}
    );
  }
  
  getData() {
    if (this.state.apiToken === "") {
      var token = decryptToken();
      if (token !== "") {
        this.setState({"apiToken" : token}, function() {
          getIncomeData(this.state.apiToken, (function(res) {this.setState({"income": res})}).bind(this));
          getExpenditureData(this.state.apiToken, (function(res) {this.setState({"expenditure": res})}).bind(this));
        });
      }
    } else {
      getIncomeData(this.state.apiToken, (function(res) {this.setState({"income": res})}).bind(this));
      getExpenditureData(this.state.apiToken, (function(res) {this.setState({"expenditure": res})}).bind(this));
    }
  }
  
  uploadIncomeData() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var date = prompt("Date (DD-MM-YYYY):", pad(day, 2)+ "-" + pad(month, 2) + "-" + year);
    if (date === null || date === "" || date === undefined) {
      return;
    }
    date = date.trim();
    var dateList = date.split("-");
    var d = new Date(Date.UTC(dateList[2], dateList[1] - 1, dateList[0]));
    var type = prompt("Type: ");
    if (type === null || type === "" || type === undefined) {
      return;
    }
    type = type.trim();
    var money = prompt("Income: ");
    if (money === null || money === "" || money === undefined) {
      return;
    }
    money = money.trim();
    uploadToDB(this.state.apiToken, d, type, money, "income", this.getData.bind(this));
  }
  
  uploadExpenditureData() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var date = prompt("Date (DD-MM-YYYY):", pad(day, 2)+ "-" + pad(month, 2) + "-" + year);
    if (date === null || date === "" || date === undefined) {
      return;
    }
    date = date.trim();
    var dateList = date.split("-");
    var d = new Date(Date.UTC(dateList[2], dateList[1] - 1, dateList[0]));
    var type = prompt("Type: ");
    if (type === null || type === "" || type === undefined) {
      return;
    }
    type = type.trim();
    var money = prompt("Expenditure: ");
    if (money === null || money === "" || money === undefined) {
      return;
    }
    money = money.trim();
    uploadToDB(this.state.apiToken, d, type, money, "expenditure", this.getData.bind(this));
  }
  
  render() {
    return (
      <div>
        <button className="btn" onClick={this.changeMonth.bind(this)}>Change Month</button>
        <button className="btn" onClick={this.getData.bind(this)}>Get Data</button>
        <button className="income_data" onClick={this.uploadIncomeData.bind(this)}>Income</button>
        <button className="expenditure_data" onClick={this.uploadExpenditureData.bind(this)}>Expenditure</button>
        <h2>{getMonthName(this.state.month)}</h2>
        <div className="income_div">
          <table className="income_table">
            <IncomeTableHeader month={this.state.month}/>
            <IncomeSection month={this.state.month} incomeData={this.state.income} />

            <ExpenditureSection month={this.state.month} expenditureData={this.state.expenditure} />
            <DayTotal month={this.state.month} incomeData={this.state.income} expenditureData={this.state.expenditure} />
          </table>
        </div>
      </div>
    );
  }
}

export default IncomeTable;
