function PizzaMaker() {
  this.pieSize = ["not to share", "to share", "study group", "drunk party"];
}

PizzaMaker.prototype.crustSize = function(size) {
  if (size === "not to share") { //not to share is a personal sized pizza or a small
  return (7);
} else if (size === "to share"){ //share is a medium sized pizza
  return (9);
} else if (size === "study group"){ //study group is a large pizza
    return (11);
  } else if (size === "drunk party"){ //drunk party is an extra large pizza
    return (12);
  }
}
