import { EventHandlerInterface } from "../interfaces/event-handler.interface";
import { EventInterface } from "../interfaces/event.interface";
import { OrderPlacedEvent } from "../order-placed";

export class SendMessageToRabbitMQHandler implements EventHandlerInterface<EventInterface> {
    
    handle(event: OrderPlacedEvent): void {
        console.log("SendMessageToRabbitMQHandler: ", event);
    }

}
