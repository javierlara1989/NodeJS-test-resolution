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

  it("Should sellIn decrease and price increase Full Coverage", function() {
    const carInsurance = new CarInsurance([ new Product("Full Coverage", 15, 10) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(14);
    expect(products[0].price).equal(11);
  });

  it("Should sellIn decrease and price persist Full Coverage", function() {
    const carInsurance = new CarInsurance([ new Product("Full Coverage", 0, 50) ]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(50);
  });

  it("Should all values persists Mega Coverage", function() {
    const carInsurance = new CarInsurance([
        new Product("Mega Coverage", 100, 100),
        new Product("Mega Coverage", 10, 10),
        new Product("Mega Coverage", 0, 0),
    ]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal("Mega Coverage");
    expect(products[0].sellIn).equal(100);
    expect(products[0].price).equal(100);

    expect(products[1].name).equal("Mega Coverage");
    expect(products[1].sellIn).equal(10);
    expect(products[1].price).equal(10);

    expect(products[2].name).equal("Mega Coverage");
    expect(products[2].sellIn).equal(0);
    expect(products[2].price).equal(0);
  });

});
