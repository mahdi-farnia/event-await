# Promisified Once Event Listener

This package is compatible with node and browser environments and supports commonjs and esm and contains typescript definitions.

## Installation

```bash
npm install --save event-await # yarn add event-await
```

## Usage

```ts
import once from 'event-await';

const event = await once(document, 'DOMContentLoaded');
```

Removing listener:

```ts
const $event = once(element, 'click');

$event.off(); // removes listener
```

## License

This package is licensed under the MIT License.
