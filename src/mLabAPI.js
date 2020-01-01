import { computeMonthDays } from './Helper.js'

export function getIncomeData(token, callback) {
  var year = new Date().getFullYear();
  var startTime = new Date(year - 1, 0).toISOString();
  var endTime = new Date(year + 1, 0).toISOString();
  
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        callback(formmatedData(JSON.parse(this.responseText), "income"));
      }
  };
  xhr.open("GET", 'https://api.mlab.com/api/1/databases/income/collections/income?q={"income": {"$exists":true}, "date": {"$gte": "' + startTime +'", "$lt": "' + endTime + '"}}&s={"date":-1}&apiKey=' + token, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send();
}

export function getExpenditureData(token, callback) {
  var year = new Date().getFullYear();
  var startTime = new Date(year - 1, 0).toISOString();
  var endTime = new Date(year + 1, 0).toISOString();
  
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        callback(formmatedData(JSON.parse(this.responseText), "expenditure"));
      }
  };
  xhr.open("GET", 'https://api.mlab.com/api/1/databases/income/collections/income?q={"expenditure": {"$exists":true}, "date": {"$gte": "' + startTime +'", "$lt": "' + endTime + '"}}&s={"date":-1}&apiKey=' + token, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send();
}

export function uploadToDB(token, date, type, money, section, callback) {
  var data = { "date": date,
               [section]: type,
               "money": money
  };

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        callback();
      }
  };
  xhr.open("POST", 'https://api.mlab.com/api/1/databases/income/collections/income?apiKey=' + token, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(data));
}


export function formmatedData(data, section) {
  var resultObj = {};
  for (var index=1;index<=12;index++) {
    resultObj[index] = {};
  }
  for (var index in data) {
    var d = data[index];
    var date = new Date(d.date);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var type = d[section];
    
    if (resultObj[month][type] === undefined) {
      var monthDays = computeMonthDays(month);
      resultObj[month][type] = Array(monthDays);
      resultObj[month][type].fill(0);
    }
    resultObj[month][type][day-1] += Math.round(d.money);
  }
  return resultObj;
}