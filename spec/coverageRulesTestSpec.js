const expect = require('chai').expect;
var Product = require("../src/product.js");
var CarInsurance = require("../src/carInsurance.js");


describe("Product price update test", function() {

  it("Should price and sellIn decrease by 1 Low Coverage", function() {
    const carInsurance = new CarInsurance([ new Product("Low Coverage", 10, 20) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("Low Coverage");
    expect(products[0].sellIn).equal(9);
    expect(products[0].price).equal(19);
  });

  it("Should only sellIn decrease by 1 Medium Coverage", function() {
    const carInsurance = new CarInsurance([ new Product("Medium Coverage", 0, 0) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("Medium Coverage");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(0);
  });

});
