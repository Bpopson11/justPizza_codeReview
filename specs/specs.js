describe('PizzaMaker', function(){
  it("will allow user to select a pizza size and establish a base cost", function(){
    var testPizza = new PizzaMaker();
    expect(testPizza.crustSize("drunkParty")).to.equal(12);
  }); //worked with all sizes of pizza

  it("will allow user to add certain toppings with no additional charge", function(){
    var testPizza = new PizzaMaker();
    expect(testPizza.basics(["pepperoni", "mushrooms", "onion"])).to.equal(12);
  });

  it("can add addtional charge for each basic topping over the free limit",  function(){
    var testPizza = new PizzaMaker();
    expect(testPizza.basics(["pepperoni", "mushrooms", "onion", "peppers", "roasted garlic", "olives"])).to.equal(15);
  });
});
