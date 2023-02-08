import { EventInterface } from "./event.interface";

// Usando T indica o uso de Generics
// Usando o extends, força o T a ser do tipo EventInterface
// E usando o = indica que por padrão o tipo dele é EventInterface
export interface EventHandlerInterface<T extends EventInterface = EventInterface> {
    handle(event: T): void;
}
