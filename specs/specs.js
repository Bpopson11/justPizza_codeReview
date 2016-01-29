describe('PizzaMaker', function(){
  it("will allow user to select a pizza size and apply a base cost", function(){
    var testPizza = new PizzaMaker();
    expect(testPizza.crustSize("drunk party")).to.equal(12);
  }); //worked with all sizes of pizza
});
