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
    if (tops.length <= 3) {
    return (basePrice);
    } else if (tops.length >3) {
    return (basePrice + (tops.length - 3))
    }
}

PizzaMaker.prototype.specials = function(specTops) {
  var basePrice = this.crustSize("toShare");
    if (specTops.length === 0) {
    return (basePrice);
  } else if (specTops.length > 0) {
    return (basePrice + (specTops.length * 2))
    }
}

PizzaMaker.prototype.delivery = function(deliver) {
  if (deliver === "delivery") {
   return (3.5)
  } else if (deliver === "pick up") {
   return (0)
  }
}

$(document).ready(function() {
  var pizzaMaker = new PizzaMaker();
  $("#pizzaForm").click(function(event) {
  var size = $("select#crust").val();
  console.log(size);
  });
});
