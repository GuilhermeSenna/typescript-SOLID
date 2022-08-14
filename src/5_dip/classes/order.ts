import { orderStatus } from './interfaces/order-status';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

export class Order {
    private _orderStatus: orderStatus = 'open';

    // This is breaking another principle
    constructor(
        // Dependency injection
        private readonly cart: ShoppingCartProtocol,
        private readonly messaging: MessagingProtocol,
        private readonly persistency: PersistencyProtocol,
        private readonly customer: CustomerOrder,
    ) {}

    get orderStatus(): orderStatus {
        return this._orderStatus;
    }

    checkout(): void {
        if (this.cart.isEmpty()) {
            console.log('Seu carrinho está vazio');
            return;
        }

        this._orderStatus = 'closed';
        this.messaging.sendMessage(
            `Seu pedido com total de R$ ${this.cart.totalWithDiscount()} foi recebido.`,
        );
        this.persistency.saveOrder();
        this.cart.clear();
        console.log(
            'O cliente é:',
            this.customer.getName(),
            '-',
            this.customer.getIDN(),
        );
    }

    saveOrder(): void {
        console.log('Pedido salvo com sucesso...');
    }
}
