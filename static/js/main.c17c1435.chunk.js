(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(t,e,a){t.exports=a(52)},25:function(t,e,a){},26:function(t,e,a){},27:function(t,e,a){},52:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(18),o=a.n(i),s=(a(25),a(3)),c=a(4),l=a(6),u=a(5),p=a(7);a(26),a(27);function h(t){switch(t=parseInt(t)){case 2:var e=(new Date).getFullYear();return e%4===0&&e%100!==0||e%400===0?29:28;case 1:case 3:case 5:case 7:case 8:case 10:case 12:return 31;default:return 30}}function m(t,e){for(var a=t+"";a.length<e;)a="0"+a;return a}var d=a(28);function v(t,e){return t+e}var b=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"createHeader",value:function(){var t=[];t.push(r.a.createElement("td",null));for(var e=1;e<=h(this.props.month);e++)t.push(r.a.createElement("td",null,m(e,2)));return t.push(r.a.createElement("td",null,"Type Total")),r.a.createElement("thead",null,r.a.createElement("tr",null,t))}},{key:"render",value:function(){return this.createHeader()}}]),e}(n.Component),f=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"createRows",value:function(){var t=[],e=Object.keys(this.props.incomeData[this.props.month]);for(var a in e){var n=e[a],i=[];i.push(r.a.createElement("td",null,n));for(var o=1;o<=h(this.props.month);o++)i.push(r.a.createElement("td",null,"$",this.props.incomeData[this.props.month][n][o-1]||0));i.push(r.a.createElement("td",null,"$",this.props.incomeData[this.props.month][n].reduce(v))),t.push(r.a.createElement("tr",null,i))}return t}},{key:"createSubTotal",value:function(){var t=[];t.push(r.a.createElement("td",{className:"section"},"Sub Total"));for(var e=0,a=1;a<=h(this.props.month);a++){var n=0,i=Object.keys(this.props.incomeData[this.props.month]);for(var o in i){var s=i[o];n+=this.props.incomeData[this.props.month][s][a-1]}e+=n,t.push(r.a.createElement("td",null,"$",n))}return t.push(r.a.createElement("td",null,"$",e)),r.a.createElement("tr",null,t)}},{key:"render",value:function(){return r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"section"},"Income"),r.a.createElement("td",{colSpan:"100%"})),this.createRows(),this.createSubTotal())}}]),e}(n.Component),E=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"createRows",value:function(){var t=[],e=Object.keys(this.props.expenditureData[this.props.month]);for(var a in e){var n=e[a],i=[];i.push(r.a.createElement("td",null,n));for(var o=1;o<=h(this.props.month);o++)i.push(r.a.createElement("td",null,"$",this.props.expenditureData[this.props.month][n][o-1]||0));i.push(r.a.createElement("td",null,"$",this.props.expenditureData[this.props.month][n].reduce(v)||0)),t.push(r.a.createElement("tr",null,i))}return t}},{key:"createSubTotal",value:function(){var t=[];t.push(r.a.createElement("td",{className:"section"},"Sub Total"));for(var e=0,a=1;a<=h(this.props.month);a++){var n=0,i=Object.keys(this.props.expenditureData[this.props.month]);for(var o in i){var s=i[o];n+=this.props.expenditureData[this.props.month][s][a-1]}e+=n,t.push(r.a.createElement("td",null,"$",n))}return t.push(r.a.createElement("td",null,"$",e)),r.a.createElement("tr",null,t)}},{key:"render",value:function(){return r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"section"},"Expenditure"),r.a.createElement("td",{colSpan:"100%"})),this.createRows(),this.createSubTotal())}}]),e}(n.Component),y=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"createTotal",value:function(){var t=[];t.push(r.a.createElement("td",{className:"section"},"Day Total"));for(var e=0,a=1;a<=h(this.props.month);a++){var n=0,i=0,o=Object.keys(this.props.incomeData[this.props.month]);for(var s in o){var c=o[s];n+=this.props.incomeData[this.props.month][c][a-1]}o=Object.keys(this.props.expenditureData[this.props.month]);for(var s in o){c=o[s];i+=this.props.expenditureData[this.props.month][c][a-1]}var l=n-i;e+=l,t.push(r.a.createElement("td",null,"$",l))}return t.push(r.a.createElement("td",null,"$",e)),r.a.createElement("tbody",null,r.a.createElement("tr",null,t))}},{key:"render",value:function(){return this.createTotal()}}]),e}(n.Component),D=a(14);function O(t,e){var a=(new Date).getFullYear(),n=new Date(a,0).toISOString(),r=new Date(a+1,0).toISOString(),i=new XMLHttpRequest;i.onreadystatechange=function(){4===this.readyState&&200===this.status&&e(k(JSON.parse(this.responseText),"income"))},i.open("GET",'https://api.mlab.com/api/1/databases/income/collections/income?q={"income": {"$exists":true}, "date": {"$gte": "'+n+'", "$lt": "'+r+'"}}&apiKey='+t,!0),i.setRequestHeader("Content-type","application/json"),i.send()}function g(t,e){var a=(new Date).getFullYear(),n=new Date(a,0).toISOString(),r=new Date(a+1,0).toISOString(),i=new XMLHttpRequest;i.onreadystatechange=function(){4===this.readyState&&200===this.status&&e(k(JSON.parse(this.responseText),"expenditure"))},i.open("GET",'https://api.mlab.com/api/1/databases/income/collections/income?q={"expenditure": {"$exists":true}, "date": {"$gte": "'+n+'", "$lt": "'+r+'"}}&apiKey='+t,!0),i.setRequestHeader("Content-type","application/json"),i.send()}function j(t,e,a,n,r,i){var o,s=(o={date:e},Object(D.a)(o,r,a),Object(D.a)(o,"money",n),o),c=new XMLHttpRequest;c.onreadystatechange=function(){4===this.readyState&&200===this.status&&i()},c.open("POST","https://api.mlab.com/api/1/databases/income/collections/income?apiKey="+t,!0),c.setRequestHeader("Content-type","application/json"),c.send(JSON.stringify(s))}function k(t,e){for(var a={},n=1;n<=12;n++)a[n]={};for(var n in t){var r=t[n],i=new Date(r.date),o=i.getMonth()+1,s=i.getDate(),c=r[e];if(void 0===a[o][c]){var l=h(o);a[o][c]=Array(l),a[o][c].fill(0)}a[o][c][s-1]+=parseInt(r.money)}return console.log(t),console.log(a),a}var S=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={month:1,monthDays:31,apiToken:"",income:k({}),expenditure:k({})},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"changeMonth",value:function(){var t=prompt("Month (1-12):");null!==t&&""!==t&&void 0!==t&&(t=t.trim(),this.setState({month:t},function(){this.setState({monthDays:h(this.state.month)})}))}},{key:"getData",value:function(){if(""===this.state.apiToken){var t=function(){var t=prompt("Passphrase:");try{var e=d.AES.decrypt("U2FsdGVkX1/Iwss9Q1fUC8y9qgLSYRvFREi0Fx7SSCErxUBXh/9lo5+z7gyItljTI37XbYadyZ//B3KI6wJAig==",t).toString(d.enc.Utf8)}catch(a){e=""}return""===e&&alert("Incorrect Passphrase"),e}();""!==t&&this.setState({apiToken:t},function(){O(this.state.apiToken,function(t){this.setState({income:t})}.bind(this)),g(this.state.apiToken,function(t){this.setState({expenditure:t})}.bind(this))})}else O(this.state.apiToken,function(t){this.setState({income:t})}.bind(this)),g(this.state.apiToken,function(t){this.setState({expenditure:t})}.bind(this))}},{key:"uploadIncomeData",value:function(){this.getData();var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,n=t.getDate(),r=prompt("Date (DD-MM-YYYY):",m(n,2)+"-"+m(a,2)+"-"+e);if(null!==r&&""!==r&&void 0!==r){var i=(r=r.trim()).split("-"),o=new Date(Date.UTC(i[2],i[1]-1,i[0])),s=prompt("Type: ");if(null!==s&&""!==s&&void 0!==s){s=s.trim();var c=prompt("Income: ");null!==c&&""!==c&&void 0!==c&&(c=c.trim(),j(this.state.apiToken,o,s,c,"income",this.getData.bind(this)))}}}},{key:"uploadExpenditureData",value:function(){this.getData();var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,n=t.getDate(),r=prompt("Date (DD-MM-YYYY):",m(n,2)+"-"+m(a,2)+"-"+e);if(null!==r&&""!==r&&void 0!==r){var i=(r=r.trim()).split("-"),o=new Date(Date.UTC(i[2],i[1]-1,i[0])),s=prompt("Type: ");if(null!==s&&""!==s&&void 0!==s){s=s.trim();var c=prompt("Expenditure: ");null!==c&&""!==c&&void 0!==c&&(c=c.trim(),j(this.state.apiToken,o,s,c,"expenditure",this.getData.bind(this)))}}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:this.changeMonth.bind(this)},"Change Month"),r.a.createElement("button",{className:"btn",onClick:this.getData.bind(this)},"Get Data"),r.a.createElement("button",{className:"income_data",onClick:this.uploadIncomeData.bind(this)},"Income"),r.a.createElement("button",{className:"expenditure_data",onClick:this.uploadExpenditureData.bind(this)},"Expenditure"),r.a.createElement("h2",null,["January","February","March","April","May","June","July","August","September","October","November","December"][this.state.month-1]),r.a.createElement("div",{className:"income_div"},r.a.createElement("table",{className:"income_table"},r.a.createElement(b,{month:this.state.month}),r.a.createElement(f,{month:this.state.month,incomeData:this.state.income}),r.a.createElement(E,{month:this.state.month,expenditureData:this.state.expenditure}),r.a.createElement(y,{month:this.state.month,incomeData:this.state.income,expenditureData:this.state.expenditure}))))}}]),e}(n.Component),w=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"income"},r.a.createElement("h1",null,"Income Statement"),r.a.createElement(S,null))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.c17c1435.chunk.js.map