import { EventHandlerInterface } from "./events/interfaces/event-handler.interface";
import { EventInterface } from "./events/interfaces/event.interface";
import { EventDispatcher } from "./events/dispatcher/event-dispatcher";
import { SendMessageToRabbitMQHandler } from "./events/handlers/send-message-to-rabbitmq.handler";
import { OrderPlacedEvent } from "./events/order-placed";
import { SendMessageToKafkaHandler } from "./events/handlers/send-message-to-kafka.handler";

function main(): void {
    const eventDispatcher: EventDispatcher = new EventDispatcher();

    const sendMessageToRabbitMQHandler: EventHandlerInterface = new SendMessageToRabbitMQHandler();
    const sendMessageToKafkaHandler: EventHandlerInterface = new SendMessageToKafkaHandler();

    eventDispatcher.register("OrderPlacedEvent", sendMessageToRabbitMQHandler);
    eventDispatcher.register("OrderPlacedEvent", sendMessageToKafkaHandler);

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
