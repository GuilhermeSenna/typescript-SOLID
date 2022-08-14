/*
Interface segregation principle

Os clientes não devem ser forçados a depender de types, interfaces ou métodos abstratos que não utilizam.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import {
    FiftyPercentDiscount,
    NoDiscount,
    TenPercentDiscount,
} from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
// const customer = new IndividualCustomer('Guilherme', 'Senna', '123.415.213-31');
const customer = new EnterpriseCustomer('Tech LTDA', '412.412.124/0001-23');
const order = new Order(shoppingCart, messaging, persistency, customer);

console.log(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
