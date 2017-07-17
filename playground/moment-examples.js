var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60

var now = moment();

console.log('Current timestamp', now.unix());

var unixTimestamp = now.unix();
// var days = unixTimestamp / (24 * 3600)
//
// console.log('Days', days);
// console.log('Years', days / 365);

var currentMoment = moment.unix(unixTimestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ h:mm a'));


console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
