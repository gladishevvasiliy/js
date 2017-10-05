
/*function CoffeeMachine(power) {
  this._waterAmount = 0;
  this._power = power;
}

CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;


CoffeeMachine.prototype._getTimeToBoil = function() {
  return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
}

CoffeeMachine.prototype.run = function() {
  setTimeout(function() {
    alert( 'Кофе готов!' );
  }, this._getTimeToBoil());
};

CoffeeMachine.prototype.setWaterAmount = function(amount) {
  this._waterAmount = amount;
};

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();

*/


function FormatError(message) {
  SyntaxError.apply(this, arguments);
  this.name = "FormatError";
  this.message = message;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

}

FormatError.prototype = Object.create(SyntaxError.prototype);
FormatError.prototype.constructor = FormatError;

var err = new FormatError("ошибка форматирования");

alert( err.message ); // ошибка форматирования
alert( err.name ); // FormatError
alert( err.stack ); // стек на момент генерации ошибки

alert( err instanceof SyntaxError ); // true
