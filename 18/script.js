/*

function Machine(power) {
      this._enabled = false;

      this.enable = function() {
        this._enabled = true;
      };

      this.disable = function() {
        this._enabled = false;
      };
    }

    function CoffeeMachine(power) {
      Machine.apply(this, arguments);

      var parentDisable = this.disable; // (1)

      this.disable = function() { // (2)
        parentDisable.call(this); // (3)
        clearTimeout(timerID);
        throw new Error ("Кофеварка остановлена");

    }

      var waterAmount = 0;
      var timerID;

      this.setWaterAmount = function(amount) {
        waterAmount = amount;
      };

      function onReady() {
        alert('Кофе готово!');
      }

      this.run = function() {
        if (!this._enabled) {
          throw new Error ("Кофеварка выключена");
        }

        timerID = setTimeout(onReady, 1000);

      };

    }

    var coffeeMachine = new CoffeeMachine(10000);
    coffeeMachine.enable();
    coffeeMachine.run();
    coffeeMachine.disable(); // остановит работу, ничего не выведет

    */
/*
function Machine(power) {
  this._enabled = false;

  this.enable = function() {
  this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}*/

function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
  Machine.apply(this, arguments);

  var food = [];

  this.addFood = function() {

    if (!this._enabled) {
      throw new Error ("Холодильник выключен");
    }

    if (food.length + arguments.length > this._power / 100) {
      throw new Error ("Нельзя добавить, не хватит места");
    }

    for (var i = 0; i < arguments.length; i++){
      food.push(arguments[i]);
    }
  }

  this.getFood = function() {
    return food.slice();
  }

  this.filterFood = function(func) {
    return food.filter(func);



    //longer first realisation
    /*var filteredFood = [];

    food.forEach(function(item) {
      if ( func(item) ) {
        filteredFood.push(item);
      }
    });

    return filteredFood;*/
  }

  var parentDisable = this.disable;

  this.disable = function() {

    if (food.length != 0){
      throw new Error ("ошибка, в холодильнике есть еда");
    }

    parentDisable();
  }


  this.removeFood = function(item) {
    var index = food.indexOf(item);
    if (index != -1){
      food.splice(index, 1);
    }

    /*for (var i = 0; i < food.length; i++) {
      if (food[i].title == item) {
        food.splice(i, 1);
      }
    }
    /*food.forEach(function(item) {
      if ( func(item) ) {
        filteredFood.push(item);
      }
    });*/
  }



}
/*
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});


fridge.removeFood("нет такой еды"); // без эффекта
alert( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

alert(dietItems);


dietItems.forEach(function(item) {
  alert( item.title ); // сок, зелень
  fridge.removeFood(item);
});

alert( fridge.getFood().length ); // 2
*/

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда
