import { EventHandlerInterface } from "../event-handler.interface";
import { EventInterface } from "../event.interface";
import { EventDispatcherInterface } from "./event-dispatcher.interface";

export class EventDispatcher implements EventDispatcherInterface {
    
    register(event: string, handler: EventHandlerInterface<EventInterface>): void {
        throw new Error("Method not implemented.");
    }

    notify(event: EventInterface): void {
        throw new Error("Method not implemented.");
    }

}
