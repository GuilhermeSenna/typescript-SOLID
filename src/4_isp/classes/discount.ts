export abstract class Discount {
    protected discount = 0;

    calculate(price: number): number {
        /*
            Forces the classes which extends this abstract class to implements...
            ...this method.

            But this logic also breaks Liskov's principle
        */
        // throw new Error('Not Implemented Error');

        return price - price * this.discount;
    }
}

export class FiftyPercentDiscount extends Discount {
    protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
    protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {}
