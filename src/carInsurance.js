
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
                    //this.fullCoverage (this.products[i])
                    break
                case 'Mega coverage':
                    //this.megaCoverage (this.products[i])
                    break
                case 'Special Full Coverage':
                    //this.specialFullCoverage (this.products[i])
                    break
                case 'Super Sale':
                    //this.superSale (this.products[i])
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
}
