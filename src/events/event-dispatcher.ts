import { EventHandlerInterface } from "../event-handler.interface";
import { EventInterface } from "../event.interface";
import { EventDispatcherInterface } from "./event-dispatcher.interface";

export class EventDispatcher implements EventDispatcherInterface {
    private eventHandlers: { [eventName: string]: EventHandlerInterface[] } = {};

    register(eventName: string, handler: EventHandlerInterface): void {
        // Se o evento não existir, ele é cadastrado com uma lista vazia
        if (!this.eventHandlers[eventName]) {
            this.eventHandlers[eventName] = [];
        }

        this.eventHandlers[eventName].push(handler);
    }

    notify(event: EventInterface): void {
        const eventName: string = event.constructor.name;

        if (this.eventHandlers[eventName]) {
            this.eventHandlers[eventName].forEach((handler: EventHandlerInterface) => handler.handle(event))
        }
    }

    getEventHandlers(): { [eventName: string]: EventHandlerInterface[] } {
        return this.eventHandlers;
    }

}
