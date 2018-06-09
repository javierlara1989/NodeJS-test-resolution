
module.exports = class CarInsurance {
    constructor(products = []) {
        this.products = products;
    }

    updatePrice() {
        for (var i = 0; i < this.products.length; i++) {
            switch (this.products[i].name) {
                case 'Low Coverage':
                    this.lowCoverage (this.products[i])
                    break
                case 'Medium Coverage':
                    this.mediumCoverage (this.products[i])
                    break
                case 'Full Coverage':
                    this.fullCoverage (this.products[i])
                    break
                case 'Mega coverage':
                    this.megaCoverage (this.products[i])
                    break
                case 'Special Full Coverage':
                    this.specialFullCoverage (this.products[i])
                    break
                case 'Super Sale':
                    this.superSale (this.products[i])
                    break
            }
        }
        return this.products;
    }

    lowCoverage (product) {
        product.sellIn--
        if (product.price > 0 && product.price < 50) {
            var decrease = (product.sellIn < 0)? 2: 1;
            product.price -= decrease;
            product.price = (product.price < 0)? 0: product.price;
        }
    }

    mediumCoverage (product) {
        product.sellIn--
        if (product.price > 0 && product.price < 50) {
            var decrease = (product.sellIn < 0)? 2: 1;
            product.price -= decrease;
            product.price = (product.price < 0)? 0: product.price;
        }
    }

    fullCoverage (product) {
        product.sellIn--
        if (product.price < 50) {
            var increase = (product.sellIn < 0)? 2: 1;
            product.price += increase;
            product.price = (product.price > 50)? 50: product.price;
        }
    }

    megaCoverage (product) {
        //do nothing
    }

    specialFullCoverage (product) {
        product.sellIn--
        if (product.sellIn < 0) {
            product.price = 0;
        } else if (product.sellIn < 5) {
            product.price += 3;
        } else if (product.sellIn < 10) {
            product.price += 2;
        } else {
            product.price += 1;
        }
        product.price = (product.price > 50)? 50: product.price;
    }

    superSale (product) {
        product.sellIn--
        if (product.price > 0 && product.price < 50) {
            var decrease = (product.sellIn < 0)? 4: 2;
            product.price -= decrease;
            product.price = (product.price < 0)? 0: product.price;
        }
    }
}

