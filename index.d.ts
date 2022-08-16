export default function once<E extends keyof HTMLElementEventMap>(
  target: HTMLElement,
  event: E
): Promise<HTMLElementEventMap[E]>;
export default function once(target: EventTarget, event: string): Promise<Event>;
export default function once<E extends keyof WindowEventMap>(
  target: Window,
  event: E
): Promise<WindowEventMap[E]>;
export default function once<E extends keyof DocumentEventMap>(
  target: Document,
  event: E
): Promise<DocumentEventMap[E]>;
export default function once<E extends keyof HTMLBodyElementEventMap>(
  target: Body,
  event: E
): Promise<HTMLBodyElementEventMap[E]>;
export default function once<E extends keyof WebSocketEventMap>(
  target: WebSocket,
  event: E
): Promise<WebSocketEventMap[E]>;
