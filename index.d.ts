export declare interface PromisedEvent<T> extends Promise<T> {
  off(): void;
}
export default function once<E extends keyof HTMLElementEventMap>(
  target: HTMLElement,
  event: E
): PromisedEvent<HTMLElementEventMap[E]>;
export default function once(target: EventTarget, event: string): PromisedEvent<Event>;
export default function once<E extends keyof WindowEventMap>(
  target: Window,
  event: E
): PromisedEvent<WindowEventMap[E]>;
export default function once<E extends keyof DocumentEventMap>(
  target: Document,
  event: E
): PromisedEvent<DocumentEventMap[E]>;
export default function once<E extends keyof HTMLBodyElementEventMap>(
  target: Body,
  event: E
): PromisedEvent<HTMLBodyElementEventMap[E]>;
export default function once<E extends keyof WebSocketEventMap>(
  target: WebSocket,
  event: E
): PromisedEvent<WebSocketEventMap[E]>;
