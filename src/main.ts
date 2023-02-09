import { EventHandlerInterface } from "./event-handler.interface";
import { EventInterface } from "./event.interface";
import { EventDispatcher } from "./events/event-dispatcher";
import { SendMessageToRabbitMQHandler } from "./events/handlers/send-message-to-rabbitmq.handler";
import { OrderPlacedEvent } from "./events/order-placed";

function main(): void {
    const eventDispatcher: EventDispatcher = new EventDispatcher();
    const eventHandler: EventHandlerInterface = new SendMessageToRabbitMQHandler();
    eventDispatcher.register("OrderPlacedEvent", eventHandler);

    const event: EventInterface = new OrderPlacedEvent({
        orderId: "123",
        customerId: "123",
        productId: "123",
        quantity: 1,
        total: 100,
    });
    eventDispatcher.notify(event);
}

(() => {
    main();
})();
