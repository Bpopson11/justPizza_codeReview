function PizzaMaker() {
  this.basePrice = this.crustSize();
  this.basicTops = [];
  this.specialTops = [];
}

PizzaMaker.prototype.crustSize = function(size) {
  if (size === "notToShare") { //not to share is a personal sized pizza or a small
    return (7);
  } else if (size === "toShare"){ //share is a medium sized pizza
    return (9);
  } else if (size === "studyGroup"){ //study group is a large pizza
    return (11);
  } else if (size === "drunkParty"){ //drunk party is an extra large pizza
    return (12);
  }
}

PizzaMaker.prototype.basics = function(tops) {
  var basePrice = this.crustSize("drunkParty");
  console.log(basePrice);
  if (tops.length <= 3) {
  return (basePrice);
  }
}
