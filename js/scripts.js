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

PizzaMaker.prototype.basics = function(basicTops) {
  var basicAddons = 0
    if (basicTops <= 3) {
    return (basicAddons);
  } else if (basicTops > 3) {
    return (basicAddons + (basicTops - 3))
    }
}

PizzaMaker.prototype.specials = function(specTops) {
  var specAddons = 0;
    if (specTops === 0) {
    return (specAddons);
  } else if (specTops > 0) {
    return (specAddons + (specTops * 2))
    }
}

PizzaMaker.prototype.delivery = function(deliver) {
  if (deliver === "delivery") {
   return (3)
 } else if (deliver === "pickUp") {
   return (0)
  }
}

$(document).ready(function() {
  var pizzaMaker = new PizzaMaker();
  $("#pizzaForm").submit(function(event) {
    $("#finalPizzaPrice").empty();
    var size = $("select#crust").val();
    var basePrice = pizzaMaker.crustSize(size);
    var basicTops = $('input#basic[type="checkbox"]:checked').length;
    var specTops = $('input#special[type="checkbox"]:checked').length;
    var basicTopPrice = pizzaMaker.basics(basicTops);
    var specTopPrice = pizzaMaker.specials(specTops);
    var deliver = $("input#delivery").val();
    var travelFee = pizzaMaker.delivery(deliver);
    var finalPrice = basePrice + basicTopPrice + specTopPrice + travelFee;
    $("#finalPizzaPrice").append("<p>Total: $" + finalPrice + ".00" + "</p>");
    $("#salad").show();
    event.preventDefault();
    $("#salad").alert("Were you paying attention? We really only make pizza.");

  });

});
