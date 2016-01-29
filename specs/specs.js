describe('PizzaMaker', function(){
  it("will allow user to select a pizza size and establish a base cost", function(){
    var testPizza = new PizzaMaker();
    expect(testPizza.crustSize("drunkParty")).to.equal(12);
  }); //worked with all sizes of pizza

  it("will allow user to add certain toppings with no additional charge", function(){
    var testPizza = new PizzaMaker();
    expect(testPizza.basics(["pepperoni", "mushrooms", "onion"])).to.equal(12);
  });
});
