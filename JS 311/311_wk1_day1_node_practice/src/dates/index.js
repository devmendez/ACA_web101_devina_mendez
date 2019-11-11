// import moment here; use this package in each function
const moment = require('moment')

const today = () => {
  // write code for dates.today
return moment().format('dddd'); 
}

const calendar = () => {
  // write code for dates.calendar
  return moment().format('LL');

}

const currentTime = () => {
  // write code for dates.currentTime
  return moment().format('LTS');

}

module.exports = {
  today,
  calendar,
  currentTime
}