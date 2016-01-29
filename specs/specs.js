describe('PizzaMaker', function(){
  it("will allow user to select a pizza size and establish a base cost", function(){
    var testPizza = new PizzaMaker();
    expect(testPizza.crustSize("drunkParty")).to.equal(12);
  }); //worked with all sizes of pizza

  it("will allow user to add certain toppings with no additional charge", function(){
    var testPizza = new PizzaMaker();
    expect(testPizza.basics(["pepperoni", "mushrooms", "onion"])).to.equal(12);
  });

  it("will add addtional charge for each basic topping over the free limit",  function(){
    var testPizza = new PizzaMaker();
    expect(testPizza.basics(["pepperoni", "mushrooms", "onion", "peppers", "roasted garlic", "olives"])).to.equal(15);
  });

  it("will charge extra per each special topping chosen to the base price",  function(){
    var testPizza = new PizzaMaker();
    expect(testPizza.specials(["blue cheese", "fennel sausage", "spinach", "grilled chicken"])).to.equal(17); //tested on blank array too
  });

  it("will charge a delivery fee",  function(){
    var testPizza = new PizzaMaker();
    expect(testPizza.delivery("delivery")).to.equal(3.5);
  });

});
