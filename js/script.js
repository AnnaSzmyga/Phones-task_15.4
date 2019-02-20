'use strict';

function Phone(brand, model, price, color, available) {
  	this.brand = brand;
  	this.model = model;
	this.price = price;
	this.color = color;
	this.available = available;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

Phone.prototype.checkAvailability = function() {	
	if (this.available === true) {
		console.log(this.model + " is available at this moment!");
	} else {
		console.log("Sorry, " + this.model + " is not available at this moment! Please, check tommorow!");
	}
}

var samsungGalaxyS6 = new Phone("Samsung", "Samsung Galaxy S6", 1899, "black", true);
var iPhone6S = new Phone("Apple", "iPhone 6S", 2250, "silver", false);
var onePlusOne = new Phone("OnePlus", "OnePlus One", 2399, "white", true);

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();

samsungGalaxyS6.checkAvailability();
iPhone6S.checkAvailability();
onePlusOne.checkAvailability();
