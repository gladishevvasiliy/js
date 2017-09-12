describe("pow", function() {

  function makeTest(x) {
    var expected = x * x * x;
    it('при возведении ' + x + ' в степень 3 результат' + expected, function(){
      assert.equal( pow(x, 3), expected );
    });
  }

  for (var x = 1; X <= 5; X++) {
    makeTest(x)
  }
  
});
