/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.

Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/messaging-protocol';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const persistency = new Persistency();
// const customer = new IndividualCustomer('Guilherme', 'Senna', '123.415.213-31');
const customer = new EnterpriseCustomer('Tech LTDA', '412.412.124/0001-23');

class MessagingMock implements MessagingProtocol {
    sendMessage(msg: string): void {
        console.log('A mensagem foi enviada pelo MOCK');
    }
}

// const messaging = new Messaging();
const messaging = new MessagingMock();

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
