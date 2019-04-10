export function computeMonthDays(month) {
  var month = parseInt(month);
  switch(month) {
    case 2:
      var year = new Date().getFullYear();
      return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))?29:28;
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
      return 31;
    default:
      return 30;
  }
}

export function getMonthName(month) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthNames[month-1];
}

export function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

var CryptoJS = require("crypto-js"); 


export function decryptToken(passphrase) {
  var ciphertext = "U2FsdGVkX1/Iwss9Q1fUC8y9qgLSYRvFREi0Fx7SSCErxUBXh/9lo5+z7gyItljTI37XbYadyZ//B3KI6wJAig==";
  if (passphrase === undefined) {
    passphrase = prompt("Passphrase:");
  }
  try {
    var bytes  = CryptoJS.AES.decrypt(ciphertext, passphrase);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
  } catch (err) {
    var originalText = "";
  }
  if (originalText === "") {
    alert("Incorrect Passphrase");
  }
  return originalText;
}

export function getSum(total, num) {
  return total + num;
}
