const { CalendarControllerClass } = require('./dist/Date/controller');

const controller = new CalendarControllerClass();

console.log('Before selectMonth:', controller._currentDate.getMonth(), controller._currentDate.getFullYear());

controller.selectMonth(7, 2025);

console.log('After selectMonth:', controller._currentDate.getMonth(), controller._currentDate.getFullYear());
console.log('Expected: month=7, year=2025');
